"use client"

import { useState, useEffect, useRef } from "react";

export function useIsVisible(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [ref, isVisible];
}
