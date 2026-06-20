import styles from "./page.module.css";

export default function App() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Jerry Deng</h1>

      <p className={styles.description}>
        I&apos;m an infrastructure engineer at Shopify, where I build the edge
        routing platform that handles 80 million requests per minute of
        global HTTP traffic. I specialize in distributed systems and software
        infrastructure.
      </p>

      <a
        className={styles.link}
        href="https://www.linkedin.com/in/jdeng2857/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </main>
  );
}
