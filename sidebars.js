// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'about',
    {
      type: 'category',
      label: 'Mes projets',
      items: [
        'project-point-pass',
        'project-sum-time',
        'project-terraform-s3',
        'project-ci-cd-docusaurus',
      ],
    },
    {
      type: 'category',
      label: 'Compétences',
      items: [
        'skills/devops',
        'skills/rh',
      ],
    },
  ],
};

export default sidebars;
