import { useEffect, RefObject } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  topRef: RefObject<HTMLDivElement>;
}

const ScrollToTop = ({ topRef }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, topRef]);

  return null;
};

export default ScrollToTop;
