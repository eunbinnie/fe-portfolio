import { RefObject, useEffect, useRef, useState } from 'react';

interface IObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = (
  targetRef: RefObject<HTMLElement>,
  { threshold = 0.5, root = null, rootMargin = '0px' }: IObserverOptions,
) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [animated, setAnimated] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!observer.current) {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting);
        });
      };

      observer.current = new window.IntersectionObserver(observerCallback, {
        threshold: threshold,
        root: root,
        rootMargin: rootMargin,
      });
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      observer.current?.disconnect();
      observer.current = null;
    };
  }, [targetRef, threshold, root, rootMargin]);

  useEffect(() => {
    if (isInViewport && !animated) {
      setAnimated(true);
    }
  }, [isInViewport, animated]);

  return { isInViewport, animated };
};

export default useIntersectionObserver;
