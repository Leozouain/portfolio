import { easeInOut, motion } from "framer-motion";
import message from "../assets/message.png";
import Button from "./Button";

const MailModal = ({ name, action }) => {
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
      className="h-full w-full flex justify-center items-center top-0 right-0 "
    >
      {/* <div className=" absolute w-full h-full bg-theme-3 opacity-20 border-none   "></div> */}
      <div
        className="p-10  w-screen  md:w-1/2 bg-theme-1 top-0  
        rounded-2xl shadow-[16px_16px_20px_#c084fc] flex flex-col 
    justify-center items-center border-solid border-4 gap-2"
      >
        <motion.img
          whileInView={{
            opacity: 1,
            scale: 1,

            rotate: [0, 5, 10, 0, -5, -10, 0],
            transition: { duration: 0.5, repeat: true, ease: easeInOut },
          }}
          src={message}
          alt="emailSent"
          className="w-2/4 "
        />
        <h3 className="h3">
          Dear <span className="t capitalize">{name}</span>,
          <br /> Thank you for reaching out! I’ve received your message and will
          get back to you shortly.
          <br /> Best regards, LeoZouain{" "}
        </h3>
        <Button action={action}>Close</Button>
      </div>
    </motion.div>
  );
};
export default MailModal;
