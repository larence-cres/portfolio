import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/NavBar.module.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState } from 'react';

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <div
                className={`${styles.hamburger} ${menuOpen && styles.active}`}
                onClick={() => setMenuOpen(!menuOpen)}>
                <span className={styles.line1}></span>
                <span className={styles.line2}></span>
                <span className={styles.line3}></span>
            </div>
            <div className={`${styles.navbar} ${menuOpen ? styles.show : styles.hide}`}>
                <div className={styles.wrapper}>
                    <div className={styles.logoHolder}>
                        <div onClick={() => setMenuOpen(false)}>
                            <Link href="#intro">
                                <a className={styles.logo}>
                                    <Image src="/coding.svg" alt="coding" width={100} height={46} />
                                    <p>Larence</p>
                                </a>
                            </Link>
                        </div>
                        <pre>Andriod Developer</pre>
                    </div>

                    <div className={styles.menu}>
                        <ul>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link href="#about">About</Link>
                            </li>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link href="#experiences">Experiences</Link>
                            </li>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link href="#projects">Projects</Link>
                            </li>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link href="#skills">Skills</Link>
                            </li>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link href="#contactMe">Contact Me</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.mediaLinks}>
                        <div>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/larence-cres"><GitHubIcon /></a>
                        </div>
                        <div>
                            <a target='_blank' rel='noopener noreferrer' href="https://linkedin.com/in/larence-shrestha-9b7b31122"><LinkedInIcon /></a>
                        </div>
                        <div>
                            <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/larence.shrestha/"><FacebookIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}