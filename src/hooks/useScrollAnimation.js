import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * Respects prefers-reduced-motion.
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default: 0.1
 * @param {string} options.rootMargin - Root margin. Default: '0px 0px -50px 0px'
 * @param {boolean} options.triggerOnce - Only trigger once. Default: true
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export default useScrollAnimation;
