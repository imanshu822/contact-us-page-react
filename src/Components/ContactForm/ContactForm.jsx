import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import img from "./character.jpg";
function ContactForm() {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("imanshu822@gmail.com");
  const [text, setText] = useState("Hello World");

  const handleOnMouseOver = (event) => {
    event.target.style.backgroundColor = "#fff";
    event.target.style.color = "#000";
  };
  const handleOnMouseOut = (event) => {
    event.target.style.backgroundColor = "#000";
    event.target.style.color = "#fff";
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setText(event.target.TEXT.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text={"VIA SUPPORT CHAT"}
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text={"VIA CALL"} icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text={"VIA EMAIL FORM"}
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="name">TEXT</label>
            <textarea rows="8" type="textarea" name="TEXT" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              text={"SUBMIT BUTTON"}
            />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src={img} alt="contact" />
      </div>
    </section>
  );
}

export default ContactForm;
