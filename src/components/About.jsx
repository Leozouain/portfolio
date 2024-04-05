import laptop from "../assets/laptop.png";
import planet from "../assets/planet.png";
import { easeInOut, motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="aboutMe"
      className=" w-full items-center h-full flex flex-col gap md:justify-center max-w-[77.5rem]
      mx-auto px-5 md:px-10  xl:max-w-[87.5rem]"
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
      <div className="flex  max-w-[77.5rem] xl:max-w-[87.5rem] overflow-hidden">
        <div
          className="flex flex-col md:flex-row h-[60vh] w-screen justify-center 
        items-center"
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
          <div className="w-full  h-full flex items-center md:px-[8rem] px-5 ">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi placeat molestiae explicabo mollitia vitae voluptates.
              Repellat dolorum fugit temporibus eos corrupti qui sint explicabo
              consequuntur excepturi exercitationem voluptate ducimus aliquid,
              dolorem similique sed! Facere, quis alias?
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
