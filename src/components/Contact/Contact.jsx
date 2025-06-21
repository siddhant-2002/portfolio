import React from "react";
import styles from "./Contact.module.css";
import contactLogo from "../../../assets/contact/contact.png";
// import emailIcon from "../../../assets/contact/emailIcon.png";
// import githubIcon from "../../../assets/contact/githubIcon.png";
// import linkedinIcon from "../../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <section className={styles["contact-section"]} id="contact">
      <div className={styles["contact-card"]}>
        <div className={styles["left-column"]}>
          <div className={styles["logo-wrapper"]}>
            <img src={contactLogo} alt="Contact" className={styles.logo} />
          </div>
        </div>
        <div className={styles["right-column"]}>
          <h2 className={styles.header}>Contact Me</h2>
          <p className={styles["form-desc"]}>
            I'm open to new opportunities and collaborations. Drop your message
            below and I'll get back to you soon!
          </p>
          <form className={styles.form}>
            <div className={styles["form-group"]}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className={styles.input}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
