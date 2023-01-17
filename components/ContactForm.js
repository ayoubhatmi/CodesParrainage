"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kc1tluh",
        "template_8tkqyxf",
        form.current,
        "4kfiq0uhTc98yr3UR"
      )
      .then(
        (result) => {},
        (error) => {}
      );

    e.target.reset();
  };

  return (
    <form id="form" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        className="input-case"
        placeholder="Nom complet"
        name="name"
        required
      />
      <input
        type="text"
        className="input-case"
        placeholder="Adresse email"
        name="email"
        id="email"
        required
      />

      <textarea
        cols="30"
        rows="10"
        name="message"
        placeholder="Votre message"
        required
      ></textarea>
      <input type="submit" value="Envoyer" className="send-btn" />
    </form>
  );
};

export default ContactForm;
