import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const ContactMap = lazy(() => import('./ContactMap'));
const mapContainerClass = 'w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200 relative z-0';

const DeferredContactMap = (props) => {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '400px' });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={mapContainerClass}>
      {shouldLoad ? (
        <Suspense fallback={<div className="h-full w-full bg-slate-100" />}>
          <ContactMap {...props} />
        </Suspense>
      ) : (
        <div className="h-full w-full bg-slate-100" />
      )}
    </div>
  );
};

export default DeferredContactMap;