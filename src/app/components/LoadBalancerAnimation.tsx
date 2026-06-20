"use client";

import { motion, useReducedMotion } from "framer-motion";

function regionLayout(centerX: number) {
  const spread = [-28, -14, 0, 14, 28];
  const users = spread.map((dx) => ({ x: centerX + dx, y: 48 }));
  const lb = { x: centerX - 28, y: 66, w: 56, h: 14 };
  const lbCx = centerX;
  const lbTop = lb.y;
  const lbBottom = lb.y + lb.h;
  const servers = spread.map((dx) => ({ x: centerX + dx, y: 118 }));
  const db = { x: centerX - 36, y: 148, w: 72, h: 12, ry: 4 };
  const dbTop = db.y;
  return { users, lb, lbCx, lbTop, lbBottom, servers, db, dbTop, centerX };
}

const layoutA = regionLayout(105);
const layoutB = regionLayout(305);

const routesA = [
  { userIdx: 0, serverIdx: 3 },
  { userIdx: 2, serverIdx: 4 },
  { userIdx: 4, serverIdx: 1 },
];

const routesB = [
  { userIdx: 1, serverIdx: 3 },
  { userIdx: 3, serverIdx: 0 },
  { userIdx: 4, serverIdx: 2 },
];

function Cloud({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <ellipse cx={cx - 18} cy={cy + 2} rx={18} ry={9} fill="white" stroke="#bbb" strokeWidth={0.8} />
      <ellipse cx={cx + 18} cy={cy + 2} rx={18} ry={9} fill="white" stroke="#bbb" strokeWidth={0.8} />
      <ellipse cx={cx} cy={cy - 3} rx={20} ry={10} fill="white" stroke="#bbb" strokeWidth={0.8} />
      <rect x={cx - 34} y={cy + 1} width={68} height={10} fill="white" stroke="none" />
      <ellipse cx={cx - 18} cy={cy + 2} rx={16} ry={7} fill="white" stroke="none" />
      <ellipse cx={cx + 18} cy={cy + 2} rx={16} ry={7} fill="white" stroke="none" />
      <ellipse cx={cx} cy={cy - 3} rx={18} ry={8} fill="white" stroke="none" />
    </g>
  );
}

function HealthPulse({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={3}
      fill="none"
      stroke="#bbb"
      strokeWidth={0.8}
      initial={{ r: 3, opacity: 0.5 }}
      animate={{ r: 8, opacity: 0 }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeOut",
      }}
    />
  );
}

function SelectionPulse({ cx, cy, delay }: { cx: number; cy: number; delay: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={3}
      fill="none"
      stroke="#888"
      strokeWidth={1.2}
      initial={{ r: 3, opacity: 0 }}
      animate={{
        r: [3, 3, 10, 10],
        opacity: [0, 0, 0.6, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "easeOut",
        times: [0, 0.3, 0.35, 0.55],
      }}
    />
  );
}

function AnimatedDot({
  layout,
  userIdx,
  serverIdx,
  delay,
}: {
  layout: ReturnType<typeof regionLayout>;
  userIdx: number;
  serverIdx: number;
  delay: number;
}) {
  const user = layout.users[userIdx];
  const server = layout.servers[serverIdx];

  return (
    <>
      <SelectionPulse cx={server.x} cy={server.y} delay={delay} />
      <motion.circle
        r={2}
        fill="#666"
        initial={{ cx: user.x, cy: user.y, opacity: 0 }}
        animate={{
          cx: [user.x, layout.lbCx, layout.lbCx, server.x, server.x, server.x],
          cy: [user.y, layout.lbTop, layout.lbBottom, server.y, server.y, layout.dbTop],
          opacity: [0, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          delay,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
          times: [0, 0.2, 0.25, 0.55, 0.6, 1],
        }}
      />
    </>
  );
}

function Region({
  layout,
  reduced,
}: {
  layout: ReturnType<typeof regionLayout>;
  reduced: boolean;
}) {
  const { users, lb, lbCx, lbTop, lbBottom, servers, db, centerX } = layout;

  return (
    <g>
      <Cloud cx={centerX} cy={25} />

      {users.map((u, i) => (
        <line key={`ul${i}`} x1={u.x} y1={u.y + 2.5} x2={lbCx} y2={lbTop} stroke="#e0e0e0" strokeWidth={0.7} />
      ))}

      {servers.map((s, i) => (
        <line key={`ls${i}`} x1={lbCx} y1={lbBottom} x2={s.x} y2={s.y - 3} stroke="#e0e0e0" strokeWidth={0.7} />
      ))}

      {servers.map((s, i) => (
        <line key={`sd${i}`} x1={s.x} y1={s.y + 3} x2={s.x} y2={db.y} stroke="#e0e0e0" strokeWidth={0.7} />
      ))}

      <path
        d={`
          M ${db.x} ${db.y + db.ry}
          A ${db.w / 2} ${db.ry} 0 0 1 ${db.x + db.w} ${db.y + db.ry}
          V ${db.y + db.h - db.ry}
          A ${db.w / 2} ${db.ry} 0 0 1 ${db.x} ${db.y + db.h - db.ry}
          Z
        `}
        fill="white"
        stroke="#444"
        strokeWidth={1.2}
      />
      <ellipse
        cx={db.x + db.w / 2}
        cy={db.y + db.ry}
        rx={db.w / 2}
        ry={db.ry}
        fill="white"
        stroke="#444"
        strokeWidth={1.2}
      />

      {users.map((u, i) => (
        <circle key={`u${i}`} cx={u.x} cy={u.y} r={2.5} fill="#bbb" />
      ))}

      <rect
        x={lb.x}
        y={lb.y}
        width={lb.w}
        height={lb.h}
        rx={3}
        fill="white"
        stroke="#444"
        strokeWidth={1.2}
      />

      {servers.map((s, i) => (
        <circle key={`s${i}`} cx={s.x} cy={s.y} r={3} fill="#bbb" />
      ))}

      {!reduced && [0, 2, 4].map((idx) => (
        <HealthPulse key={`hp${idx}`} cx={servers[idx].x} cy={servers[idx].y} delay={idx * 1.2} />
      ))}
    </g>
  );
}

export default function LoadBalancerAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;

  const crossY = layoutA.lbTop + (layoutA.lb.h / 2);
  const crossX1 = layoutA.lb.x + layoutA.lb.w;
  const crossX2 = layoutB.lb.x;

  const dbMidY = layoutA.db.y + layoutA.db.h / 2;
  const dbLinkX1 = layoutA.db.x + layoutA.db.w;
  const dbLinkX2 = layoutB.db.x;

  return (
    <svg
      viewBox="0 0 410 185"
      width="100%"
      style={{ maxWidth: 460, display: "block", margin: "0 auto" }}
      role="img"
      aria-label="Two-region distributed system with load balancers routing traffic to servers and databases"
    >
      <Region layout={layoutA} reduced={reduced} />
      <Region layout={layoutB} reduced={reduced} />

      <line x1={crossX1} y1={crossY} x2={crossX2} y2={crossY} stroke="#ccc" strokeWidth={0.8} strokeDasharray="4 4" />
      <line x1={dbLinkX1} y1={dbMidY} x2={dbLinkX2} y2={dbMidY} stroke="#ccc" strokeWidth={0.8} strokeDasharray="3 3" />

      {!reduced && (
        <motion.circle
          r={1.5}
          fill="#999"
          initial={{ cx: crossX1, cy: crossY }}
          animate={{ cx: [crossX1, crossX2, crossX1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {!reduced && (
        <motion.circle
          r={1.5}
          fill="#999"
          initial={{ cx: dbLinkX2, cy: dbMidY }}
          animate={{ cx: [dbLinkX2, dbLinkX1, dbLinkX2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      )}

      {!reduced && routesA.map((r, i) => (
        <AnimatedDot key={`a${i}`} layout={layoutA} userIdx={r.userIdx} serverIdx={r.serverIdx} delay={i * 1} />
      ))}

      {!reduced && routesB.map((r, i) => (
        <AnimatedDot key={`b${i}`} layout={layoutB} userIdx={r.userIdx} serverIdx={r.serverIdx} delay={i * 1 + 0.5} />
      ))}
    </svg>
  );
}
