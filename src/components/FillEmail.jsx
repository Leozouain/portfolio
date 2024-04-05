/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import Button from "./Button";

const FillEmail = ({ name, lastName, msg, email, action }) => {
  const fields = [
    { name: "Name", value: name },
    { name: "Last Name", value: lastName },

    { name: "Email", value: email },
    { name: "Message", value: msg },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
        },
      }}
      className="h-full w-full flex justify-center items-center top-0 right-0"
    >
      {/* <div className=" absolute w-full h-full bg-theme-3 opacity-20 border-none   "></div> */}
      <div
        className="p-10    md:w-1/2 bg-theme-1 top-0  
        rounded-2xl shadow-[16px_16px_20px_#c084fc] flex flex-col 
    justify-center items-center border-solid border-4 gap-2 w-screen  "
      >
        <h2 className="h2">Please fill the empty fields</h2>
        {fields.map((item, i) => (
          <p className="h3 text-theme-5" key={i}>
            {item.value === "" ? "*" + item.name : null}
          </p>
        ))}
        <Button action={action}>Close</Button>
      </div>
    </motion.div>
  );
};
export default FillEmail;
