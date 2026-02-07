import { useEffect, RefObject } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  topRef: RefObject<HTMLDivElement>;
}

const ScrollToTop = ({ topRef }: ScrollToTopProps) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, hash, topRef]);

  return null;
};

export default ScrollToTop;
