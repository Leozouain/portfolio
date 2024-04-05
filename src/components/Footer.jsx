import github from "../assets/github3d.png";
import linkedin from "../assets/linkedin.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer ">
      <div id="footer" className="w-screen h-[7rem] bg-theme-">
        <div className="w-full flex justify-center py-2 bg-theme-3">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/leonardo-morais-874b67229/"
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{
                scale: [1.5, 1.1],
                rotateX: [1.3, -1.3],
                boxShadow: [2],

                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  repeat: Infinity,
                },
              }}
              className="rounded-full 
               "
              src={linkedin}
              width={70}
              alt="linkedin"
            />
          </a>
          <a target="_blank" href="https://github.com/Leozouain">
            <motion.img
              whileHover={{
                scale: [1.5, 1.1],
                rotateX: [1.3, -1.3],

                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  repeat: Infinity,
                },
              }}
              className="rounded-full "
              src={github}
              width={70}
              alt="github"
            />
          </a>
        </div>
        <p className="w-full flex justify-center items-center py-0 group">
          “
          <a target="_blank" href="https://github.com/Leozouain">
            LeoZouain
          </a>{" "}
          – Exploring creativity, one pixel at a time.{" "}
          {new Date().getFullYear()}” 🎨
          <motion.span
            className="group-hover:-translate-y-[1000px] group-hover:scale-150
            group-hover:translate-x-[1000px]  duration-1000 
            ease-in-out "
          >
            🚀
          </motion.span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
