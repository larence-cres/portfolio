import styles from "../../styles/Intro.module.scss"
import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
    return (
        <div className={styles.intro} id="intro">
            <div className={styles.start}>
                <div className={styles.wrapper}>
                    <h3>
                        <span className={styles.h2}>H</span>
                        <span className={styles.h2}>i</span>
                        <span className={styles.h2}>,</span>
                        <br />
                        <span className={styles.h1}>I</span>
                        <span className={styles.h1}>&apos;</span>
                        <span className={styles.h1}>m </span> &nbsp;
                        <span className={styles.h1}>L</span>
                        <span className={styles.h1}>a</span>
                        <span className={styles.h1}>r</span>
                        <span className={styles.h1}>e</span>
                        <span className={styles.h1}>n</span>
                        <span className={styles.h1}>c</span>
                        <span className={styles.h1}>e</span>
                        <span className={styles.h1}>,</span>
                        <br />
                        <span className={styles.highlight}>A</span>
                        <span className={styles.highlight}>n</span>
                        <span className={styles.highlight}>d</span>
                        <span className={styles.highlight}>r</span>
                        <span className={styles.highlight}>o</span>
                        <span className={styles.highlight}>i</span>
                        <span className={styles.highlight}>d</span> &nbsp;
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span>r</span>
                    </h3>
                    <a href="/assets/resume.pdf" target='_blank' rel='noopener noreferrer'>
                        <div className={styles.button}>Resume</div>
                    </a>
                </div>
            </div>

            <div className={styles.end}>
                <div className={styles.image}>
                    <Image src="/progressive.svg" alt="progressive" width={512} height={512} />
                </div>
            </div>
            <Link href="#about">
                <div className={styles.chevron}></div>
            </Link>
        </div>
    )
}
