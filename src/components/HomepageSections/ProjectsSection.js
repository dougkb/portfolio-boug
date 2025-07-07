import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function ProjectsSection() {
  return (
    <motion.section
      id="projets"
      className={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>💼 Projets</h2>
      <ul>
        <li><strong>Point & Pass RH</strong> – Gestion des absences et transfert de responsabilités</li>
        <li><strong>Sum Time</strong> – Suivi du temps de travail et notifications intelligentes</li>
        <li><strong>CI/CD avec Docusaurus</strong> – Déploiement automatisé de documentation</li>
        <li><strong>Terraform AWS</strong> – Hébergement statique avec S3 + CloudFront sécurisé</li>
      </ul>
    </motion.section>
  );
}
