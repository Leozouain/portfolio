import { skills } from "../constants";
import Button from "./Button";
import email from "../assets/email.png";
import github from "../assets/githubwht.png";
import { motion, spring } from "framer-motion";
import basket from "../assets/basket.png";
import avatar from "../assets/avatar.png";

const Hero = () => {
  const text = `L e o n a r d o \u00A0   Z o u a i n`.split(" ");

  return (
    <header id={`hero`} className="md:mb-[6rem] mb-[3rem]">
      <div className="mb-[3rem]  container flex md:flex-row flex-col-reverse items-center ">
        <div
          className=" w-full h-full flex flex-col gap md:justify-center max-w-[77.5rem]
         mx-auto px-5 md:px-10  xl:max-w-[87.5rem]"
        >
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: [0, 1.5, 1] }}
            transition={{
              duration: 2, // Total duration of the animation
              type: "spring", // Spring animation type
              stiffness: 300, // Adjust stiffness for desired effect
              damping: 10, // Adjust damping for bounciness
              restSpeed: 0.5, // Speed at which it settles
              delay: 0.5,
            }}
            className="h3 md:text-h2 text-h3  bg-theme-5 text-theme-2 font-bold self-start
          px-2 py-1 rounded-"
          >
            Front End Developer{" "}
          </motion.h3>

          {/* <h1 className="md:text-h1 text-h1sm font-bold tracking-wider ">
            Leonardo Zouain
          </h1> */}
          <div className="flex">
            {text.map((el, i) => (
              <motion.h1
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 10 }}
                key={i}
                className="md:text-h1 text-h1sm font-bold tracking-wider h1"
              >
                {el}
              </motion.h1>
            ))}
          </div>
          <motion.h3
            viewport={{ once: true }}
            whileInView={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 1.5 }}
            className="md:text-h3 text-p mb-5 h3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic,
            veritatis repudiandae architecto ratione ad in rem, officiis
            incidunt ea laborum iure? Numquam ad assumenda ipsum!
          </motion.h3>
          <div className="flex flex-wrap gap-5 mt-3 justify-between md:px-[4rem] sm:px-10">
            {skills.map((item, i) => (
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i / 10 }}
                key={item.id}
                className="flex flex-col justify-center items-center   "
              >
                <img
                  className="shadow-2xl shadow-white rounded-full"
                  src={item.img}
                  width={50}
                  alt={item.title}
                />
                <p className="text-h3 h3">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* right side  */}
        <div className="  w-[80%] rounded-full mb-7 md:mb-0 md:relative md:-bottom-12">
          <img src={basket} alt="" width={"80%"} className="" />
          {/* <img
            src={astro}
            alt=""
            width={"100%"}
            className="absolute -rotate-[25deg] top-0"
          /> */}
        </div>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        // className="lg:absolute lg:-bottom-[100px] flex flex-col lg:flex-row md:justify-between
        //   lg:px-[5rem] md:mt-[7rem] mt-[3rem] items-center gap-4  "
        className="relative flex md:flex-row flex-col gap-5 w-full  justify-evenly
         items-center bg-theme-3 py-[1rem] rounded-2xl "
      >
        <motion.div
          viewport={{ once: true }}
          className=" rounded-full w-20 h-20 md:w-32 md:h-32 md:absolute -left-5 z-20"
          style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover" }}
        />
        <Button live={"#contact"} logo={email}>
          Contact me
        </Button>
        <Button github="https://github.com/Leozouain" target logo={github}>
          GitHub
        </Button>
      </motion.div>
    </header>
  );
};
export default Hero;
