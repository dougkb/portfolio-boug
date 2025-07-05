# 💼 Portfolio professionnel — Bougary Kanté

Ce site est mon portfolio personnel construit avec [Docusaurus](https://docusaurus.io/), déployé automatiquement via GitHub Actions sur GitHub Pages.  
Il présente mon profil bilingue, mes projets DevOps et mes compétences RH/IT.

---

## 🧭 Contenu du site

📁 `/docs` contient les sections suivantes :
- `about.md` → À propos de moi (FR/EN)
- `project-*.md` → Présentation de mes projets (DevOps, RH, CI/CD, Cloud…)
- `skills/*.md` → Compétences DevOps & RH

---

## 🚀 Déploiement automatique

Ce projet est configuré pour se déployer automatiquement via **GitHub Actions** :
- À chaque `push` sur `main`, un build est déclenché
- Le site est généré dans `build/` et publié sur GitHub Pages
- Le fichier `robots.txt` empêche l’indexation par les moteurs de recherche

🌐 **Accès au site** :  
➡️ [https://dougkb.github.io/portfolio-boug/](https://dougkb.github.io/portfolio-boug/)

---

## 🛠️ Développement local

```bash
npm install
npm run start
```

---

## 🏗️ Build du site

```bash
npm run build
```

---

## 📦 Déploiement manuel (optionnel)

Utilisation de SSH :

```bash
USE_SSH=true yarn deploy
```

Sans SSH :

```bash
GIT_USER=<votre nom GitHub> yarn deploy
```

> Ces commandes ne sont **pas nécessaires si le workflow GitHub Actions est activé**.

---

## 🇬🇧 English Summary

This repository hosts my **personal DevOps & HR portfolio** website, built with [Docusaurus](https://docusaurus.io/) and deployed via **GitHub Actions** to GitHub Pages.

It includes:
- My profile (bilingual FR/EN)
- Real DevOps and HR projects
- My key skills and tools

🔗 [Access the website here](https://dougkb.github.io/portfolio-boug/)
