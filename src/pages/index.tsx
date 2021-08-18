import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Intro from '../components/Intro';
import NavBar from '../components/NavBar';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { useState } from 'react';

export default function Main(props: any) {

    console.log(props)

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div className={styles.container}>
            <Head>
                <title>Larence Shrestha</title>
                <meta name="description" content="Portfolio of Larence Shrestha" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.navbar}>
                <NavBar />
            </div>
            <div className={styles.sections}>
                <Intro />
                <About />
                <Experiences />
                <Projects />
                <Skills />
                <ContactMe />
            </div>
        </div>
    )
};
