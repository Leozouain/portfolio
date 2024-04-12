import { motion } from "framer-motion";
import Button from "./Button";
import website from "../assets/website.png";
import github from "../assets/githubwht.png";
import { projects } from "../constants";
const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-full items-center md:h-full flex flex-col gap md:justify-center max-w-[77.5rem]
    mx-auto px-5 md:px-10  xl:max-w-[87.5rem] "
    >
      {" "}
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
        className="h2 w-full flex justify-center lg:pt-6  "
      >
        My Projects
      </motion.h2>
      {projects.map((item, i) => (
        <div
          key={i}
          className=" w-full items-center h-full flex flex-col gap md:justify-center max-w-[77.5rem]
    mx-auto  md:px-10  xl:max-w-[87.5rem] "
        >
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.4,
              },
            }}
            className="text-2xl pt-5 h2"
          >
            {item.title}
          </motion.h2>
          <div className="flex  max-w-[77.5rem] xl:max-w-[87.5rem] overflow-hidden">
            <div
              className={`flex flex-col lg:flex-row h-full w-screen justify-center items-center mb-10 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className="w-[80%]  h-full flex  items-center lg:px-[3rem] 
               py-5"
              >
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.5,
                    },
                  }}
                >
                  <h3 className="h3">{item.text}</h3>
                  <div className="flex gap-5 w-full justify-center pt-5 h3">
                    {item.techs.map((tech, i) => (
                      <p key={i}>{tech}</p>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div
                className=" w-full h-full  relative flex justify-center items-center mb-28
            md:mb-0"
              >
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.7,
                    },
                  }}
                  className="md:w-[100%] md:h-[70%] w-full aspect-video  m-10 rounded-3xl
               relative shadow-[17px_21px_25px_#8121d0]"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.5,
                    },
                  }}
                  className="absolute md:bottom-5  -bottom-24 
              flex flex-col md:flex-row  justify-evenly gap-3"
                >
                  <Button target live={item.live} logo={website}>
                    Website
                  </Button>
                  {item.github !== null && (
                    <Button target github={item.github} logo={github}>
                      GitHub
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Projects;
