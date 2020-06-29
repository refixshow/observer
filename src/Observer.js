import React, { useRef, useEffect, useState } from "react";

const Observer = ({
  children,
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  },
}) => {
  const target = useRef(null);
  const [elementClass, setElementClass] = useState("");

  let element = React.cloneElement(children, {
    className: elementClass,
    ref: target,
  });

  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setElementClass("show");
      } else {
        setElementClass("");
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (target.current) {
      observer.observe(target.current);
    }
  });

  return <>{element}</>;
};

export default Observer;
