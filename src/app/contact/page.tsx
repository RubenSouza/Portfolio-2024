"use client";

import ContactItem from "@/components/ContactItem";
import Input from "@/components/Input";
import SelectInput from "@/components/SelectInput";
import TextArea from "@/components/TextArea";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail, MdPlace } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section>
      <motion.div>
        <div className="container py-12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-[100px]">
            <div
              className="bg-secondary-300/60 max-w-[600px] p-10 rounded-lg flex 
          flex-col gap-6 order-2 lg:order-none"
            >
              <h3 className="text-accent text-4xl font-semibold">
                {"Let's work together"}
              </h3>
              <p className="text-primary-500">
                {
                  "Feel free to reach out to me if you have any questions, collaboration ideas, or just want to say hello."
                }
              </p>
              <form
                className="flex flex-col gap-4"
                action="https://formsubmit.co/rubem.eliel2012@gmail.com"
                method="POST"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
                <div className="min-w-full flex flex-col gap-4">
                  <SelectInput
                    name="service"
                    value={service}
                    onChange={e => setService(e.target.value)}
                  />
                  <TextArea
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent text-secondary-500 w-[160px] rounded-3xl 
                py-3 font-semibold hover:bg-accent/80"
                >
                  {"Send Message"}
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-10">
              <ContactItem
                name="Phone"
                icon={<IoLogoWhatsapp className="text-accent w-7 h-7" />}
                description={`(+55) 83 98135-8394`}
              />
              <ContactItem
                name="Email"
                icon={<MdEmail className="text-accent w-7 h-7" />}
                description="rubem.eliel2012@gmail.com"
              />
              <ContactItem
                name="Endereço"
                icon={<MdPlace className="text-accent w-7 h-7" />}
                description="Brazil, Alcantil - PB"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
