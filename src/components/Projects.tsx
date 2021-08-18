import styles from '../../styles/Projects.module.scss';
import useSWR from 'swr';
import Image from 'next/image';
import OtherProjects from '../../public/assets/projects.json';

export interface IGithubProjects {
    name: string,
    html_url: string,
    description: string,
    created_at: string,
    language: string
}

export interface IOtherProjects {
    name: string,
    image_url: string,
    app_url: string
}

export default function Projects({ githubProjects }: any) {

    const { data } = useSWR('https://api.github.com/users/larence-cres/repos', { initialData: githubProjects });

    return (
        <div className={styles.projects} id="projects">
            <h1>Github Projects</h1>
            <div className={styles.githubContainer}>
                {data?.map((githubProject: IGithubProjects) => (
                    <a key={githubProject.name} href={githubProject.html_url} target='_blank' rel='noopener noreferrer' className={styles.githubItems}>
                        <h3>{githubProject.name}</h3>
                        <p className={styles.description}>{githubProject.description}</p>
                        <p className={styles.language}>{githubProject.language}</p>
                    </a>
                ))}
            </div>
            <h1>Other Projects</h1>
            <div className={styles.otherProjectsContainer}>
                {OtherProjects.map((otherProject: IOtherProjects) => (
                    <a key={otherProject.name} href={otherProject.app_url} target='_blank' rel='noopener noreferrer'>
                        <div className={styles.otherProjectsItems}>
                            <Image src={otherProject.image_url} width={150} height={150} className={styles.image} />
                            <h3>{otherProject.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div >
    )
}
