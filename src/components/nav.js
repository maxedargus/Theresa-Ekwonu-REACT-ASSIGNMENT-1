import React from 'react';
import { Outlet,Link } from "react-router-dom";
import styles from "./nav.module.css";


function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/' className={styles.linkso} >Home</Link> ||
                <Link to='/about' className={styles.linkso}>about</Link> ||
                <Link to='/book' className={styles.linkso}>Book</Link>

            </nav>
            <Outlet />
        </header>
    )
}

export default NavBar;