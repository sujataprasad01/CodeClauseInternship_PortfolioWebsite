import React, {useState} from 'react';
import styles from './Navbar.module.css';
// import { getImageUrl } from '../../utils';
import menuIcon from '../../assets/nav/menuIcon.png'
import closeIcon from '../../assets/nav/closeIcon.png';

const Navbar = () => {
    const[menuOpen, setMenuopen]=useState(false);
    const iconSrc=menuOpen? closeIcon: menuIcon;
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>SP</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={iconSrc} alt='menu-button' onClick={()=>setMenuopen(!menuOpen)}></img>
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} 
            onClick={()=>setMenuopen(false)}>
                <li><a href='/About'>About</a></li>
                <li><a href='/experience'>Experience</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
