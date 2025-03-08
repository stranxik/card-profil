import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Download, LinkedinIcon } from "lucide-react";

export default function CVPage() {
  const handlePrint = () => {
    document.title = "CV-thibault-souris-2025";
    window.print();
    document.title = "Thibault Souris - CV";
  };

  return (
    <main className="flex flex-col min-h-screen bg-black">
      <section className="relative min-h-screen flex items-start border-b border-neutral-800 overflow-hidden">
        {/* Bouton Export PDF */}
        <button
          onClick={handlePrint}
          className="fixed bottom-6 right-6 p-3 bg-white text-black rounded-full shadow-lg hover:bg-white/90 transition-colors z-50"
          title="Exporter en PDF"
        >
          <Download className="w-6 h-6" />
        </button>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="w-full max-w-3xl mx-auto space-y-8 py-16 px-4 md:px-8 relative">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center text-white/60 hover:text-white transition-colors gap-2 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour vers l'accueil</span>
          </Link>

          {/* Header */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white">Thibault Souris</h1>
              <h2 className="text-lg text-white/60">Product Manager</h2>
              <a
                href="https://www.linkedin.com/in/thibault-souris/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mt-2"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>@thibault-souris</span>
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bordeaux, France
              </span>
            </div>
            
            <p className="text-base sm:text-lg text-white/80 max-w-2xl">
              Product Manager avec huit ans d'expérience dans la gestion de projets digitaux et le développement de solutions
              SaaS. Expert en automatisation et en IA, avec une solide expérience en transformation digitale dans les secteurs de
              la santé et de l'éducation.
            </p>
          </div>

          {/* Projets */}
          <div className="space-y-4">
            <h2 className="text-white/80 text-sm font-medium tracking-wider">Projets principaux</h2>
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-base font-medium">Flowz</h3>
                    <p className="text-white/60 text-sm">Plateforme de gestion de données intelligente, propulsée par l'IA et les workflows automatisés</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium">Passerelle</h3>
                    <p className="text-white/60 text-sm">Solution IA pour les organismes de formation - Automatisation et optimisation des processus</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-white/80 text-sm font-medium tracking-wider mt-6">Autres projets</h2>
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-base font-medium">Moveto</h3>
                    <p className="text-white/60 text-sm">Studio de création Web3 & IA - Innovation numérique</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium">Cursor Template</h3>
                    <p className="text-white/60 text-sm">Boilerplate optimisé pour l'éditeur IA Cursor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expériences */}
          <div className="space-y-4">
            <h2 className="text-white/80 text-sm font-medium tracking-wider">Expérience</h2>
            
            {/* Consultant Digital CFA */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Consultant Digital</h3>
                    <p className="text-white/60">CFA Santé Social Auvergne-Rhône-Alpes</p>
                    <p className="text-white/40 text-sm">Lyon</p>
                  </div>
                  <span className="text-white/60 text-sm">Févr. 2024 - Mars 2025</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Définition de la roadmap produit et pilotage de l'intégration d'outils digitaux</li>
                  <li>Mise en place de stratégies d'automatisation et de lead nurturing</li>
                  <li>Cadrage communication année 2024</li>
                </ul>
              </CardContent>
            </Card>

            {/* Consultant Digital Rockefeller */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Consultant Digital</h3>
                    <p className="text-white/60">École Rockefeller</p>
                    <p className="text-white/40 text-sm">Lyon (À distance)</p>
                  </div>
                  <span className="text-white/60 text-sm">Août 2022 - Mars 2025</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Maintenance et reporting sur les éléments précédemment mis en place</li>
                  <li>Création de nouvelles features, conseil et formation</li>
                  <li>Intégration d'outils digitaux : Brevo (+4k étudiants), Typeform (+30 formulaires intelligents), Zapier (206 tâches automatisées)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ingénieur Conseil Rockefeller */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Ingénieur Conseil</h3>
                    <p className="text-white/60">École Rockefeller</p>
                    <p className="text-white/40 text-sm">Lyon</p>
                  </div>
                  <span className="text-white/60 text-sm">Janv. 2022 - Juil. 2022</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Définition et mise en place de la stratégie digitale</li>
                  <li>Mise en place des premiers outils d'automatisation</li>
                  <li>Résultats : Augmentation de l'engagement de 154% et des impressions de 40%</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intervenant référent Growth Hacker */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Intervenant référent Growth Hacker</h3>
                    <p className="text-white/60">Rocket School</p>
                    <p className="text-white/40 text-sm">Bordeaux</p>
                  </div>
                  <span className="text-white/60 text-sm">Juil. 2023 - Avr. 2024</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Accompagnement des étudiants de Bachelor et Master dans l'acquisition de compétences en automatisation et marketing digital</li>
                  <li>Résultats : Application réussie des stratégies de growth hacking dans les projets des étudiants</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cofondateur & Product Manager */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Cofondateur & Product Manager</h3>
                    <p className="text-white/60">Moveto SAS</p>
                    <p className="text-white/40 text-sm">Lyon</p>
                  </div>
                  <span className="text-white/60 text-sm">Nov. 2022 - Janv. 2024</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Intégration d'Office 365 pour l'optimisation des processus internes et automatisation des workflows</li>
                  <li>Pilotage de la gestion du backlog produit et rédaction des spécifications fonctionnelles</li>
                  <li>Résultats : Amélioration de l'efficacité des processus internes et respect des délais</li>
                </ul>
              </CardContent>
            </Card>

            {/* Product Manager Havas */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Product Manager</h3>
                    <p className="text-white/60">Havas Paris pour Relyens</p>
                    <p className="text-white/40 text-sm">Paris</p>
                  </div>
                  <span className="text-white/60 text-sm">Nov. 2022 - Déc. 2022</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Prise en charge du go to market d'une nouvelle solution BtoB pour le Risk Management</li>
                  <li>Gestion de la priorisation des fonctionnalités produit et analyse des KPIs</li>
                  <li>Résultats : Lancement réussi de la solution, renforçant le positionnement de Relyens</li>
                </ul>
              </CardContent>
            </Card>

            {/* Développeur Web */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Développeur Web</h3>
                    <p className="text-white/60">S3M Concept (Easy Mobilier – Leader de l'ameublement locatif en France)</p>
                    <p className="text-white/40 text-sm">Lyon</p>
                  </div>
                  <span className="text-white/60 text-sm">Oct. 2021 - Déc. 2021</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Optimisation du site WordPress e-commerce et intégration d'automations avec leur système de gestion d'entrepôt (WMS)</li>
                  <li>Résultats : Optimisation des performances du site et automatisation des processus de gestion des stocks</li>
                </ul>
              </CardContent>
            </Card>

            {/* BRÜME */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Cofondateur & Responsable Stratégie</h3>
                    <p className="text-white/60">BRÜME (Collectif événementiel basé à Bordeaux)</p>
                    <p className="text-white/40 text-sm">Bordeaux</p>
                  </div>
                  <span className="text-white/60 text-sm">Nov. 2018 - Déc. 2021</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Organisation de plus de 30 événements musicaux et développement de stratégies d'acquisition pour les lieux partenaires</li>
                  <li>Résultats : Croissance des événements et partenariats à long terme</li>
                </ul>
              </CardContent>
            </Card>

            {/* OXAO */}
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">Responsable Développement Numérique</h3>
                    <p className="text-white/60">OXAO (Cabinet de conseil en stratégie environnementale)</p>
                    <p className="text-white/40 text-sm">Bordeaux</p>
                  </div>
                  <span className="text-white/60 text-sm">Sept. 2017 - Nov. 2017</span>
                </div>
                <ul className="text-white/80 space-y-2 list-disc list-inside text-sm">
                  <li>Gestion de la mise à jour du site WordPress et élaboration de la stratégie digitale de l'entreprise</li>
                  <li>Résultats : Amélioration de la visibilité en ligne et augmentation du trafic</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Compétences */}
          <div className="space-y-4">
            <h2 className="text-white/80 text-sm font-medium tracking-wider">Compétences</h2>
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white text-base font-medium mb-2">Gestion de projet</h3>
                    <p className="text-white/60 text-sm">Agile, Scrum, Kanban, Jira, Notion</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium mb-2">Automatisation</h3>
                    <p className="text-white/60 text-sm">N8N, Zapier, Make, Power Automate</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium mb-2">Développement web</h3>
                    <p className="text-white/60 text-sm">React, Next.js, TypeScript, Python, FastAPI, DevOps (Linux, Docker, GitHub Actions, Cloudflare Workers, DNS)</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium mb-2">IA & Data</h3>
                    <p className="text-white/60 text-sm">RAG, Vector DB, Embeddings, Prompt Engineering</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium mb-2">Product Management</h3>
                    <p className="text-white/60 text-sm">Roadmap, User Stories, KPIs, Growth Hacking</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium mb-2">Analytics</h3>
                    <p className="text-white/60 text-sm">Google Analytics, SEMrush, Hotjar, Mixpanel</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formation */}
          <div className="space-y-4">
            <h2 className="text-white/80 text-sm font-medium tracking-wider">Formation</h2>
            <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
              <CardContent className="p-5 relative">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-base font-medium">Digital Campus</h3>
                    <p className="text-white/60 text-sm">Bachelor | bac+3 Chef de projet multimédia</p>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-medium">Wild Code School</h3>
                    <p className="text-white/60 text-sm">Bac +2 Développeur fullstack Node.js</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
} 