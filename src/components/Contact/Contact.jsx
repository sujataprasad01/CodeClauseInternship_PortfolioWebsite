import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import mail from '../../assets/contact/emailIcon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'
import github from '../../assets/contact/githubIcon.png'
import insta from '../../assets/contact/icons8-instagram-50.png'
import Credit from "../Credits/Credit";
export const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p><span className={styles.coloredword}>Feel free to reach out!</span></p>
      </div>
      <div className={styles.icons}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:myemail@email.com" className={styles.linkfont}>
          <img src={mail} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/myname">
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/myname">
          <img src={github} alt="Github icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/sujataprasad01/">
          <img src={insta} alt="Github icon" />
          </a>
        </li>
      </ul>
      </div>
    </footer>
 <div>
   <Credit></Credit>
 </div>
     </>
  );
};