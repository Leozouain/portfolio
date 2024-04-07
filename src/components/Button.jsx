/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Button = ({ children, logo, type, action, live, github, target }) => {
  return (
    <motion.a
      target={target ? "_blank" : null}
      onClick={action ? action : null}
      type={`${type ? type : "button"}`}
      href={live ? live : github ? github : null}
      whileHover={{
        scale: 0.95,
        boxShadow: [0, 0, 0, 0, "transparent"],
        transition: {
          duration: 0.3,
        },
      }}
      className=" bg-theme-6 cursor-pointer  group overflow-hidden relative px-4 py-2 font-medium
     text-theme-2 transition-colors duration-[400ms] hover:text-theme-3
     capitalize max-h-10 flex justify-center items-center hover:rounded-sm
     translate-x-[-4px] translate-y-[-4px] hover:rounded-sm shadow-[4px_4px_0px_#c084fc]
     hover:translate-x-[4px] hover:translate-y-[4px] rounded-md hover:shadow-[0px_0px_0px_#c084fc]
     

     "
    >
      <motion.div
        initial={{ borderRadius: 0 }}
        animate={{
          opacity: [1, 0, 0, 0, 1],
          y: [0, -70, 70, 1],
        }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex gap-3    "
      >
        <span className="text-h2">{children}</span>{" "}
        {logo && (
          <motion.img
            animate={{ opacity: [0, 0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
            src={logo}
            alt={children}
            width={30}
            className="object-cover h-full bg-theme-1 rounded-full "
          />
        )}
      </motion.div>
      {/* TOP */}
      <span
        className="absolute left-0 top-0 h-[2px] w-0 bg-theme-2 transition-all duration-100 
       group-hover:h-full"
      />
      {/* RIGHT */}
      <span
        className="absolute right-0 top-0 h-0 w-[2px] bg-theme-2 transition-all delay-100 duration-100
       group-hover:h-full"
      />
      {/* BOTTOM */}
      <span
        className="absolute bottom-0 right-0 h-[2px] w-0 bg-theme-2 transition-all delay-200 duration-100
       group-hover:w-h-full"
      />
      {/* LEFT */}
      <span
        className="absolute bottom-0 left-0 h-0 w-[2px] bg-theme-2 transition-all delay-300 duration-100
       group-hover:h-full"
      />
    </motion.a>
  );
};

export default Button;
