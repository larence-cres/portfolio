import styles from '../../styles/Experiences.module.scss';
import experiences from '../../public/assets/experiences.json';

export default function Experiences() {
    return (
        <div className={styles.experience} id="experiences">
            <h1>Experiences</h1>

            <div className={styles.wrapper}>
                {experiences.map((experience) => (
                    <div className={styles.item} key={experience.company}>
                        <div className={styles.content}>
                            <h2>{experience.company}</h2>
                            <h3>{experience.position}</h3>
                            <span>{experience.tenure}</span>
                            <span className={styles.circle}></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}