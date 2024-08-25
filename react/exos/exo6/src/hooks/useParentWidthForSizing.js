import { useEffect, useRef, useState } from "react";

const useParentWidthForSizing = () => {
  const panelRef = useRef(null);
  const [size, setSize] = useState("medium");

  useEffect(() => {
    const parentWidth = panelRef.current?.parentElement.offsetWidth;

    setSize(
      parentWidth < 768 ? "small" : parentWidth > 1024 ? "large" : "medium"
    );

    const handleResize = () => {
      const parentWidth = panelRef.current?.parentElement.offsetWidth;

      setSize(
        parentWidth < 768 ? "small" : parentWidth > 1024 ? "large" : "medium"
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { panelRef, size };
};

export default useParentWidthForSizing;
