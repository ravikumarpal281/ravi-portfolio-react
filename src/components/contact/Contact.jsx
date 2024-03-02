import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_mozn7xx", "template_wckhkiv", form.current, {
        publicKey: "wsC-39LCirqXXYW6i",
      })
      .then(
        () => {
          toast.success("Message Successfully Sent!", {
            duration: 1000,
            position: "top-center",
          });
        },
        (error) => {
          toast.error("Message Successfully Sent!", {
            duration: 1000,
            position: "bottom-center",
          });
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"></MdEmail>
            <h4>Email</h4>
            <h5>ravikumarpal281@gmail.com</h5>
            <a href="mailto:ravikumarpal281@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon"></FaWhatsapp>
            <h4>Whatsapp</h4>
            <h5>+447436971244</h5>
            <a href="https://api.whatsapp.com/send?phone=+447436971244">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="07"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn_primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
