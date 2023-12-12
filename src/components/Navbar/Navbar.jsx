import React, {useState} from 'react';
import styles from './Navbar.module.css';
// import { getImageUrl } from '../../utils';
import menuIcon from '../../assets/nav/menuIcon.png'
import closeIcon from '../../assets/nav/closeIcon.png';
import { Link } from 'react-router-dom'
import Hero from '../Hero/Hero';

const Navbar = () => {
    const[menuOpen, setMenuopen]=useState(false);
    const iconSrc=menuOpen? closeIcon: menuIcon;
  return (
    <>
    <nav className={styles.navbar}>
        <Link className={styles.title} to='/'>SP</Link>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={iconSrc} alt='menu-button' onClick={()=>setMenuopen(!menuOpen)}></img>
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} 
            onClick={()=>setMenuopen(false)}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/experience'>Skills</Link></li>
                <li><Link to='/project'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
