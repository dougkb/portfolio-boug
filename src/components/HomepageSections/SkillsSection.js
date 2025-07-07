import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function SkillsSection() {
  return (
    <motion.section
      id="competences"
      className={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>🧠 Compétences</h2>
      <ul>
        <li><strong>DevOps :</strong> Docker, GitHub Actions, CI/CD, Kubernetes, Terraform</li>
        <li><strong>Cloud :</strong> AWS, S3, EC2, EKS, CloudFront</li>
        <li><strong>RH :</strong> Paie, SIRH, digitalisation des processus RH</li>
        <li><strong>Cybersécurité :</strong> Sécurisation pipelines, IAM, bonnes pratiques DevSecOps</li>
      </ul>
    </motion.section>
  );
}
