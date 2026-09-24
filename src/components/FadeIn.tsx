"use client";

import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  direction?: "up" | "down" | "none";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translateY(0px)";
    if (direction === "up") return "translateY(24px)";
    if (direction === "down") return "translateY(-24px)";
    return "translateY(0px)";
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
