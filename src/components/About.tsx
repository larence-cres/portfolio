import styles from '../../styles/About.module.scss';
import Image from 'next/image';

export default function About() {
    return (
        <div className={styles.about} id="about">
            <div className={styles.title}>
                <h1>About Myself</h1>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <Image src="/programming.svg" alt="programming" width={512} height={512} />
                    </div>
                </div>

                <div className={styles.content}>
                    <p>My journey as an developer begun with the Android development. Over the course of years,
                        I got to polish my skill from Java to Kotlin along with the other languages including
                        Node JS with Express and Next</p>
                    <p>For over 5 years, I had many opportunities to work in a vast spectrum of <span>Android development</span>
                        what let me gather a significant amount of various experience.
                        Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.</p>
                    <p> I currently work for an Italian company along with a selected freelance client base and are open for new
                        opportunities.</p>
                </div>
            </div>
        </div>
    )
}
