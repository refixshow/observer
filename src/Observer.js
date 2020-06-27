import React, { useEffect } from "react";

const Observer = ({
  children,
  childref,
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  },
}) => {
  useEffect(() => {
    let callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          childref.current.classList.add("show");
        } else {
          childref.current.classList.remove("show");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(childref.current);

    return () => observer.disconnect();
  }, [childref, options]);

  return <>{children}</>;
};

export default Observer;
