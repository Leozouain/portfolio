import { useEffect, useState } from "react";
import { nav } from "../constants";
import { easeIn, motion } from "framer-motion";
import { scroller } from "react-scroll";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = (item) => {
    if (menuOpen) {
      if (item) {
        const href = item.replace("#", "");
        scroller.scrollTo(href, { smooth: true, duration: 0.3 });
      }
      setMenuOpen(false);
      enablePageScroll();
    } else {
      setMenuOpen(true);
      disablePageScroll();
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`w-screen   h-[4rem] fixed top-0 z-40 flex justify-evenly 
        items-center backdrop-blur-sm
      ${
        scrolling ? "bg-theme-2 opacity-85 " : "bg-theme-3"
      } transition-all duration-1000`}
      >
        <a href="#hero" className="md:w-1/5 logo text-3xl md:text-4xl">
          LeoZouain
        </a>
        <div className=" gap-5 hidden md:flex">
          {nav.map((item, i) => (
            <motion.div
              initial={{ x: 300, scale: 0.5, opacity: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: `${i * 0.3}`,
                },
              }}
              key={i}
            >
              <a
                className="rounded-2xl border-2 border-dashed border-theme-5 bg-theme-2 px-4 py-1
               font-semibold uppercase text-theme-5 transition-all duration-300 
               hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md 
               hover:shadow-[4px_4px_0px_#dccfed] active:translate-x-[0px]
               active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                href={item.url}
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* mobile */}
      </nav>
      <button
        onClick={() => handleMenu()}
        className="md:hidden fixed top-0 right-0 bg-purple-500   h-[4rem] w-[4rem] z-[51]
      rounded-2xl text-theme-3"
      >
        {menuOpen ? "X" : "="}
      </button>
      <motion.nav
        initial={{ height: 0, width: 0 }}
        whileInView={{
          height: "100vh",
          width: "80vw",
          transition: {
            duration: 0.5,
            ease: easeIn,
          },
        }}
        className={`md:hidden bg-theme-2    w-[80vw] flex-col top-0 right-0 z-[50]
        ${menuOpen ? "fixed" : "hidden"} rounded-l-3xl`}
      >
        <motion.div
          initial={{ opacity: 0, marginTop: "-50%" }}
          whileInView={{
            opacity: 1,
            marginTop: "50%",
            transition: {
              delay: 0.5,
            },
          }}
          className=""
        >
          {nav.map((item, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: `${i * 0.3}`,
                },
              }}
              key={i}
              className="flex justify-center items-center my-3 "
            >
              <a
                // href={item.url}
                onClick={() => handleMenu(item.url)}
                className={"h2 text-theme-4"}
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
};
export default Header;
