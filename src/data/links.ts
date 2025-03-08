interface Link {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  isMainProject?: boolean;
}

export const links: Link[] = [
  {
    title: "Flowz",
    href: "https://flowz.cc",
    description: "Plateforme de gestion de données intelligente, propulsée par l'IA et les workflows automatisés",
    isMainProject: true
  },
  {
    title: "Passerelle",
    href: "https://passerelle.cc",
    description: "Solution IA pour les organismes de formation - Automatisation et optimisation des processus",
    isMainProject: true
  },
  {
    title: "Moveto",
    href: "https://moveto.fr",
    description: "Studio de création Web3 & IA - Innovation numérique"
  },
  {
    title: "Cursor Template",
    href: "https://cursor-template.fr",
    description: "Boilerplate optimisé pour l'éditeur IA Cursor"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/thibault-souris/",
    description: "Mon parcours professionnel"
  },
  {
    title: "GitHub",
    href: "https://github.com/stranxik",
    description: "Découvrez mes projets open source"
  },
  {
    title: "Prendre RDV",
    href: "https://dub.sh/umKDeIX",
    description: "Planifier un rendez-vous en visio"
  }
]; 