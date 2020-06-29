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

  const element = React.cloneElement(children, {
    className: elementClass,
    ref: target,
  });

  const callback = useCallback((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? setElementClass("show") : setElementClass("");
    });
  }, []);

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    const targetToObserve = target.current;

    if (!!targetToObserve) {
      observer.observe(targetToObserve);

      return () => observer.unobserve(targetToObserve);
    }
  });

  return <>{element}</>;
};

export default Observer;
