import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Button = ({ to, btnStyle, title }) => {
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

  const style = {
    white: "bg-[#f4f4f4]",
    black: "bg-[#393c41] text-white",
  };
  return (
    <Link
      to={to}
      className={`${style[btnStyle]} rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-center text-sm font-semibold py-[.6rem] cursor-pointer shadow-md drop-shadow-md`}
      ref={animateEl}
    >
      {title}
    </Link>
  );
};

export default Button;
