import { useRef, useEffect } from 'react';

export default function useScrollFadeIn() {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.style.opacity = 0;
    node.style.transform = 'translateY(40px)';
    node.style.transition = 'opacity 0.8s, transform 0.8s';

    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        node.style.opacity = 1;
        node.style.transform = 'translateY(0)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
}