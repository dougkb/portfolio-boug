// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { motion } from 'framer-motion';
import styles from './index.module.css';
import ProjectsSection from '../components/HomepageSections/ProjectsSection';

export default function Home() {
  const history = useHistory();

  return (
    <Layout title="Accueil" description="Portfolio de Bougary Kanté">
      <motion.header
        className={styles.heroBanner}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroContent}>
          <img
            src="/img/devops-photo.jpg"
            alt="Photo de Bougary Kanté"
            className={styles.heroImage}
          />
          <h1 className={styles.title}>Bienvenue sur mon portfolio</h1>
          <p className={styles.subtitle}>
            DevOps | RH Digital | Cloud | Cybersécurité
          </p>
          <div className={styles.buttons}>
            <button onClick={() => history.push('/docs/cv')}>
              Voir mon CV
            </button>
            <button onClick={() => history.push('/docs/contact')}>
              Me contacter
            </button>
          </div>
        </div>
      </motion.header>

      <main>
        <ProjectsSection />
      </main>
    </Layout>
  );
}
