// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import { motion } from 'framer-motion';
import styles from './index.module.css';
import { useHistory } from '@docusaurus/router';

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
        <motion.section
          id="projets"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>💼 Projets</h2>
          <ul>
            <li><strong>Point & Pass RH</strong> — Gestion des absences</li>
            <li><strong>Sum Time</strong> — Suivi du temps de travail</li>
            <li><strong>CI/CD Docusaurus</strong> — Déploiement automatisé</li>
            <li><strong>Terraform S3 & CloudFront</strong> — Hébergement statique sécurisé</li>
          </ul>
        </motion.section>

        <motion.section
          id="competences"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>🧠 Compétences</h2>
          <ul>
            <li><strong>DevOps :</strong> Docker, GitHub Actions, Kubernetes, Terraform</li>
            <li><strong>RH :</strong> Paie, SIRH, Digitalisation RH</li>
          </ul>
        </motion.section>
      </main>
    </Layout>
  );
}
