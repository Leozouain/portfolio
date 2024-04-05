import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import mail from "../assets/mail.png";
import { motion } from "framer-motion";
import Button from "./Button";
import emailjs from "emailjs-com";
import MailModal from "./MailModal";
import FillEmail from "./FillEmail";

export default function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [fill, setFill] = useState(false);
  const [mailName, setMailName] = useState("");

  const handleModal = () => {
    setSent(!sent);
  };
  const emptyFields = () => {
    setFill(!fill);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(lastName);
    console.log(phone);
    console.log(msg);

    if (name === "" || lastName === "" || email === "" || msg === "") {
      setFill(!fill);
      return;
    }
    const templateParams = {
      from_name: name,
      last_name: lastName,
      phone: phone,
      message: msg,
      email: email,
    };
    emailjs
      .send(
        "leozouainportfolio",
        "template_hy4nwdd",
        templateParams,
        "-rMscC6DUsnSr7yeH"
      )
      .then(
        // eslint-disable-next-line no-unused-vars
        (res) => {
          setEmail(true);
          setMailName(name);
          setSent(true);
          setName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMsg("");
        },
        (err) => {
          console.log("ERR", err);
        }
      );
  };

  return (
    <>
      {fill ? (
        <div className="fixed inset-0 z-50 ">
          <FillEmail
            action={emptyFields}
            name={name}
            lastName={lastName}
            email={email}
            msg={msg}
          />
        </div>
      ) : null}
      {sent ? (
        <div className="fixed inset-0 z-50 ">
          <MailModal action={handleModal} name={mailName} />
        </div>
      ) : null}
      <section id="contact" className="relative isolate bg-n-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1  lg:w-1/2">
                <motion.img
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  transition={{ duration: 1 }}
                  className="opacity-25 object-cover overflow-hidden h-full w-full"
                  src={mail}
                  alt="message"
                />
              </div>
              <h2 className="h2 font-bold tracking-tight text-white">
                Get in touch
              </h2>
              <p className="mt-6 h3">
                We’d love to hear from you! Whether you have questions,
                feedback, or just want to say hello, feel free to reach out.
                Here are the ways you can get in touch:
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-n-3">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a className="hover:text-white h3" href="ai@brainwave.com">
                      leozouaindev@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <form
            method="POST"
            onSubmit={handleEmail}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
              className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block h3 font-semibold text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <motion.input
                      whileFocus={{
                        margin: 10,
                        scale: [1.3, 1.1],
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={name}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block h3 font-semibold text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <motion.input
                      whileFocus={{
                        margin: 10,
                        scale: [1.3, 1.1],
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      value={lastName}
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block h3 font-semibold text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <motion.input
                      whileFocus={{
                        margin: 10,
                        scale: [1.3, 1.1],
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block h3 font-semibold text-white"
                  >
                    Phone number <small>(optional)</small>
                  </label>
                  <div className="mt-2.5">
                    <motion.input
                      whileFocus={{
                        margin: 10,
                        scale: [1.3, 1.1],
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      value={phone}
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block h3 font-semibold text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <motion.textarea
                      whileFocus={{
                        margin: 10,
                        scale: [1.3, 1.1],
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      onChange={(e) => setMsg(e.target.value)}
                      name="message"
                      id="message"
                      value={msg}
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button action={handleEmail} className="mx-auto" type="submit">
                  Send message
                </Button>
              </div>
            </motion.div>
          </form>
        </div>
      </section>
    </>
  );
}
