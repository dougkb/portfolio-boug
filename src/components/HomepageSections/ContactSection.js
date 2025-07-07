import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function ContactSection() {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>📫 Contact</h2>
      <ul>
        <li>Email : <a href="mailto:bougary.lokante@gmail.com">bougary.lokante@gmail.com</a></li>
        <li>LinkedIn : <a href="https://www.linkedin.com/in/bougary-k/" target="_blank" rel="noopener noreferrer">Mon profil</a></li>
        <li>GitHub : <a href="https://github.com/dougkb" target="_blank" rel="noopener noreferrer">dougkb</a></li>
      </ul>
    </motion.section>
  );
}
