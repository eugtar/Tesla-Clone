import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ link }) => {
  const animateEl = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animateEl.current,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          scroller: ".wrapper",
          trigger: animateEl.current,
          toggleActions: "restart none restart reverse",
        },
      }
    );
  }, []);

  return (
    <div className="absolute inset-x-0 top-[15%] text-center" ref={animateEl}>
      <h1 className="text-4xl font-bold mb-2">{link.titleText}</h1>
      {link.on ? (
        <Link
          to={link.path}
          className="underline underline-offset-4 text-sm p-2"
        >
          {link.linkText}
        </Link>
      ) : (
        <p className="text-sm p-2">{link.linkText}</p>
      )}
    </div>
  );
};

export default Title;
