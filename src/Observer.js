import React, { useRef, useEffect, useState, useCallback } from "react";

const Observer = ({
  children,
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  },
}) => {
  const [elementClass, setElementClass] = useState("");
  const target = useRef(null);

  let element = React.cloneElement(children, {
    className: elementClass,
    ref: target,
  });

  let callback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setElementClass("show");
      } else {
        setElementClass("");
      }
    });
  }, []);

  let observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    // warning fix
    // target.current podczas wywoływania cleanupu może się zmienić
    const targetToObserve = target.current;

    if (targetToObserve) {
      observer.observe(targetToObserve);

      return () => observer.unobserve(targetToObserve);
    }
  });

  return <>{element}</>;
};

export default Observer;
