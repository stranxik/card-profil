import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-black dotted-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-8 py-16">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-caption hover:text-white transition-colors gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour vers l'accueil</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div>
            <h1 className="text-white">Thibault Souris</h1>
            <h2 className="text-neutral-400">Product Manager</h2>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-caption">
            <a href="mailto:thibaultsouris@moveto.fr" className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="w-4 h-4" />
              thibaultsouris@moveto.fr
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bordeaux, France
            </span>
          </div>
          
          <p className="text-body-lg text-neutral-300 max-w-2xl">
            Product Manager avec six ans d'expérience dans la gestion de projets digitaux et le développement de solutions
            SaaS. Expert en automatisation et en IA, avec une solide expérience en transformation digitale dans les secteurs de
            la santé et de l'éducation.
          </p>
        </div>

        {/* Expériences */}
        <div className="space-y-4">
          <h2 className="text-white px-1">Expérience</h2>
          
          {/* Growth Hacker & Consultant Webmarketing */}
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg">Growth Hacker & Consultant Webmarketing</h3>
                  <p className="text-neutral-400">Ecole Rockefeller & CFA Santé-Social</p>
                  <p className="text-neutral-500 text-sm">Lyon</p>
                </div>
                <span className="text-neutral-400 text-sm">Janv. 2022 - Aujourd'hui</span>
              </div>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside">
                <li>Définition de la roadmap produit et pilotage de l'intégration d'outils digitaux tels que Brevo (+4k étudiants), Typeform (+30 formulaires intelligents), et Zapier (206 tâches automatisées sur 27 workflows)</li>
                <li>Mise en place de stratégies d'automatisation et de lead nurturing et encadrement d'équipes marketing digital et d'alternants</li>
                <li>Résultats : Augmentation de l'engagement de 154% et des impressions de 40%</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intervenant référent Growth Hacker */}
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg">Intervenant référent Growth Hacker</h3>
                  <p className="text-neutral-400">Rocket School</p>
                  <p className="text-neutral-500 text-sm">Bordeaux</p>
                </div>
                <span className="text-neutral-400 text-sm">Juil. 2023 - Avr. 2024</span>
              </div>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside">
                <li>Accompagnement des étudiants de Bachelor et Master dans l'acquisition de compétences en automatisation et marketing digital</li>
                <li>Résultats : Application réussie des stratégies de growth hacking dans les projets des étudiants</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cofondateur & Product Manager */}
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg">Cofondateur & Product Manager</h3>
                  <p className="text-neutral-400">Moveto SAS (Cabinet de conseil en stratégie et solutions numériques)</p>
                  <p className="text-neutral-500 text-sm">Lyon</p>
                </div>
                <span className="text-neutral-400 text-sm">Nov. 2022 - Janv. 2024</span>
              </div>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside">
                <li>Intégration d'Office 365 pour l'optimisation des processus internes et automatisation des workflows</li>
                <li>Pilotage de la gestion du backlog produit et rédaction des spécifications fonctionnelles</li>
                <li>Résultats : Amélioration de l'efficacité des processus internes et respect des délais</li>
              </ul>
            </CardContent>
          </Card>

          {/* Product Manager Havas */}
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg">Product Manager</h3>
                  <p className="text-neutral-400">Havas Paris pour Relyens (Leader européen en Risk Management)</p>
                  <p className="text-neutral-500 text-sm">Paris</p>
                </div>
                <span className="text-neutral-400 text-sm">Nov. 2022 - Déc. 2022</span>
              </div>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside">
                <li>Prise en charge du go to market d'une nouvelle solution BtoB pour le Risk Management</li>
                <li>Gestion de la priorisation des fonctionnalités produit et analyse des KPIs pour ajuster la solution en fonction des besoins du marché</li>
                <li>Résultats : Lancement réussi de la solution, renforçant le positionnement de Relyens</li>
              </ul>
            </CardContent>
          </Card>

          {/* Développeur Web */}
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg">Développeur Web</h3>
                  <p className="text-neutral-400">S3M Concept (Easy Mobilier – Leader de l'ameublement locatif en France)</p>
                  <p className="text-neutral-500 text-sm">Lyon</p>
                </div>
                <span className="text-neutral-400 text-sm">Oct. 2021 - Déc. 2021</span>
              </div>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside">
                <li>Optimisation du site WordPress e-commerce et intégration d'automations avec leur système de gestion d'entrepôt (WMS)</li>
                <li>Résultats : Optimisation des performances du site et automatisation des processus de gestion des stocks</li>
              </ul>
            </CardContent>
          </Card>

          {/* BRÜME */}
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg">Cofondateur & Responsable Stratégie</h3>
                  <p className="text-neutral-400">BRÜME (Collectif événementiel basé à Bordeaux)</p>
                  <p className="text-neutral-500 text-sm">Bordeaux</p>
                </div>
                <span className="text-neutral-400 text-sm">Nov. 2018 - Déc. 2021</span>
              </div>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside">
                <li>Organisation de plus de 30 événements musicaux et développement de stratégies d'acquisition pour les lieux partenaires</li>
                <li>Résultats : Croissance des événements et partenariats à long terme</li>
              </ul>
            </CardContent>
          </Card>

          {/* OXAO */}
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium text-lg">Responsable Développement Numérique</h3>
                  <p className="text-neutral-400">OXAO (Cabinet de conseil en stratégie environnementale)</p>
                  <p className="text-neutral-500 text-sm">Bordeaux</p>
                </div>
                <span className="text-neutral-400 text-sm">Sept. 2017 - Nov. 2017</span>
              </div>
              <ul className="text-neutral-300 space-y-2 list-disc list-inside">
                <li>Gestion de la mise à jour du site WordPress et élaboration de la stratégie digitale de l'entreprise</li>
                <li>Résultats : Amélioration de la visibilité en ligne et augmentation du trafic</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Compétences */}
        <div className="space-y-4">
          <h2 className="text-white px-1">Compétences</h2>
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-medium mb-2">Gestion de projet</h3>
                  <p className="text-neutral-300">Agile, Scrum, Kanban, Jira, Notion</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Automatisation</h3>
                  <p className="text-neutral-300">N8N, Zapier, Make, Power Automate</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Développement web</h3>
                  <p className="text-neutral-300">React, Next.js, TypeScript, Python, FastAPI, DevOps (Linux, Docker, GitHub Actions, Cloudflare Workers, DNS)</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">IA & Data</h3>
                  <p className="text-neutral-300">RAG, Vector DB, Embeddings, Prompt Engineering</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Product Management</h3>
                  <p className="text-neutral-300">Roadmap, User Stories, KPIs, Growth Hacking</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Analytics</h3>
                  <p className="text-neutral-300">Google Analytics, SEMrush, Hotjar, Mixpanel</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formation */}
        <div className="space-y-4">
          <h2 className="text-white px-1">Formation</h2>
          <Card className="border-neutral-800 bg-black">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-medium">Digital Campus</h3>
                  <p className="text-neutral-400">Bachelor | bac+3 Chef de projet multimédia</p>
                </div>
                <div>
                  <h3 className="text-white font-medium">Wild Code School</h3>
                  <p className="text-neutral-400">Bac +2 Développeur fullstack Node.js</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 