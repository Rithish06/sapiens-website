import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const container = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }, container);

    return () => ctx.revert(); // cleanup GSAP context
  }, []);

  return <div ref={container}>{children}</div>;
};

export default PageTransition;
