import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <motion.header
      className={styles.heroBanner}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className={styles.heroContent}>
        <img
          src="/img/devops-photo.jpg"
          alt="Photo de Bougary Kanté"
          className={styles.heroImage}
        />
        <h1 className={styles.title}>Bienvenue sur le portfolio de Bougary Kanté</h1>
        <p className={styles.subtitle}>
          DevOps | RH Digital | Cloud | Cybersécurité
        </p>
        <p className={styles.description}>
          Professionnel RH avec 14 ans d’expérience en gestion de la paie, administration du personnel et digitalisation RH.
          Actuellement en reconversion DevOps/Cloud/Sécu, je conçois des outils SIRH utiles, sécurisés, et automatisés.
        </p>
        <div className={styles.ctaButtons}>
          <a href="/docs/cv" className="button button--primary button--lg">Voir mon CV</a>
          <a href="/docs/contact" className="button button--secondary button--lg">Me contacter</a>
        </div>
      </div>
    </motion.header>
  );
}
