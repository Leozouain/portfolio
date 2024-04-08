import laptop from "../assets/laptop.png";
import planet from "../assets/planet.png";
import { easeInOut, motion } from "framer-motion";
import Button from "./Button";
import project from "../assets/project.svg";

const About = () => {
  return (
    <section
      id="aboutMe"
      className=" w-full items-center h-full flex flex-col gap md:justify-center max-w-[77.5rem]
      mx-auto px-5 md:px-10  xl:max-w-[87.5rem] pt-24 "
    >
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        }}
        className="h2"
      >
        About me
      </motion.h2>
      <div className="flex  max-w-[77.5rem] xl:max-w-[87.5rem] overflow-hidden my-5">
        <div
          className="flex flex-col lg:flex-row  w-screen justify-center 
        items-center gap-5"
        >
          <div className=" w-[50%]  relative flex">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <motion.img
                viewport={{ once: true }}
                animate={{
                  x: [-7, 12, -5, 10, 0, -10],
                  y: [-7, 10, 0, 20, -5, -10],
                  rotate: [0, 7, -7, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
                src={laptop}
                alt="laptop guy"
                className="w-full absolute z-10"
              />
              <motion.img
                viewport={{ once: true }}
                animate={{
                  x: [-2, 0, -2],
                  y: [],
                  rotate: [3, 0, 3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
                src={planet}
                alt="laptop guy"
                className="w-full"
              />
            </motion.div>
          </div>
          <div
            className="lg:w-full w-[80%]  h-full flex items-center  lg:px-[8rem] 
           "
          >
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.4,
                },
              }}
              className="h3"
            >
              <p>
                Hello! My name is Leonardo Zouain, and I'm a FrontEnd Developer.
                I graduated with honors from the NuCamp Bootcamp and continue to
                pursue self-learning.
              </p>
              <br />
              <p>
                In addition to my love for web development, I'm passionate about
                understanding how things work and why. I enjoy building things
                from scratch through code. After understanding the knowledge of
                code, I realized that the sky is the limit, and we have endless
                possibilities to create solutions for people's problems in
                various ways. From a simple to-do app to organize the day to a
                complex system of automated operations, I'm continuously seeking
                more knowledge day after day to focus on this pursuit.{" "}
              </p>
              <br />
              <p>
                In my leisure time, I love traveling to new places with my wife,
                exploring not only beautiful landscapes but also discovering
                interesting historical facts.
              </p>
            </motion.h3>
          </div>
        </div>
      </div>
      <div className="py-5">
        <Button live={"#projects"} logo={project}>
          See My Projects
        </Button>
      </div>
    </section>
  );
};
export default About;
