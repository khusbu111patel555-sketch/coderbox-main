import { Suspense, useEffect, useRef, useState } from 'react';

const DeferredSection = ({ component: Component, minHeight = '48rem', rootMargin = '700px' }) => {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldRender(true);
        observer.disconnect();
      }
    }, { rootMargin });

    observer.observe(container);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} style={{ minHeight: shouldRender ? undefined : minHeight }}>
      {shouldRender && (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
          <Component />
        </Suspense>
      )}
    </div>
  );
};

export default DeferredSection;