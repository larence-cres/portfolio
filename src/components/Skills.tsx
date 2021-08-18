import styles from '../../styles/Skills.module.scss';
import Skills from '../../public/assets/skills.json';
import Image from 'next/image';

export default function Skill() {
    return (
        <div className={styles.skills} id="skills">
            <h1>Skills</h1>
            <div className={styles.container}>
                {Skills.map((skill) => (
                    <div className={styles.card} key={skill.name}>
                        <Image src={skill.image} width={100} height={100} className={styles.image} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
