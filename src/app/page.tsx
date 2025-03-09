import { Link } from 'react-router-dom';
import { links } from "@/data/links";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, ArrowRight } from "lucide-react";

// Séparons les liens en catégories
const mainProjects = links.filter(link => link.isMainProject);
const otherProjects = links.filter(link => 
  !link.isMainProject && !['GitHub', 'LinkedIn', 'Prendre RDV'].includes(link.title)
);
const socialLinks = links.filter(link => 
  ['GitHub', 'LinkedIn'].includes(link.title)
);
const rdvLink = links.find(link => link.title === 'Prendre RDV');

export default function LinksPage() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'github':
        return <GithubIcon className="w-5 h-5" />;
      default:
        return <ExternalLinkIcon className="w-5 h-5" />;
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center border-y border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="w-full h-full flex items-center py-8 lg:py-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-4 lg:gap-12 px-4 lg:px-20">
            <div className="flex flex-col">
              <div className="relative p-4 lg:p-6 rounded-xl border border-neutral-800 bg-black/90 backdrop-blur-sm h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl" />
                <div className="relative space-y-6">
                  <div className="space-y-2">
                    <div className="w-28 h-28 rounded-full bg-black profile-ring overflow-hidden mb-6">
                      <img 
                        src="/images/thibaultsouris.jpeg"
                        alt="Thibault Souris"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-3">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                        Thibault Souris
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/80 max-w-2xl">
                      Product Manager | IA & Automatisation
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-start gap-6">
                      {socialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-colors"
                          title={link.title}
                        >
                          {getIcon(link.title)}
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/cv">
                        <Button className="w-full sm:w-auto rounded-full px-5 bg-white text-black hover:bg-white/90">
                          Découvrir mon CV
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {rdvLink && (
                        <a
                          href={rdvLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full sm:w-auto rounded-full px-5 bg-white text-black hover:bg-white/90">
                            Prendre RDV
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                      <a
                        href="https://dub.sh/0ocsH7I"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full sm:w-auto rounded-full px-5 bg-white text-black hover:bg-white/90">
                          Assesfirst A player
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                    <div className="space-y-4">
                      <p className="text-white/80 text-sm leading-relaxed">
                        Je développe un studio de solutions IA sectorielles combinant expertise technique et connaissance métier. Mon écosystème s'articule autour de deux plateformes complémentaires : 
                        <a
                          href="https://passerelle.cc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2.5 py-0.5 mx-1 rounded-full text-xs font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                          passerelle.cc
                        </a>
                        , une solution d'analyse stratégique, et 
                        <a
                          href="https://flowz.cc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2.5 py-0.5 mx-1 rounded-full text-xs font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                          flowz.cc
                        </a>
                        , une plateforme d'automatisation intelligente.
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Spécialisé en Product Management et architectures RAG (Retrieval Augmented Generation), je conçois des solutions qui transforment les données en insights actionnables. Mon approche permet de déployer rapidement des solutions verticales complètes pour différents secteurs d'activité.
                      </p>
                      <p className="text-white/60 text-sm">
                        📅 Disponible pour des missions de conseil en stratégie produit et transformation digitale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-8">
              {/* Projets Principaux */}
              <div className="relative p-4 lg:p-6 rounded-xl border border-neutral-800 bg-black/90 backdrop-blur-sm flex-1">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl" />
                <div className="relative space-y-4">
                  <h2 className="text-white/80 text-sm font-medium tracking-wider">Projets principaux</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {mainProjects.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm hover:bg-neutral-900/50 transition-all duration-300 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <CardContent className="p-5 relative">
                            <h3 className="text-white text-lg font-medium mb-2">
                              {link.title}
                            </h3>
                            {link.description && (
                              <p className="text-white/60 text-sm line-clamp-2">
                                {link.description}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Autres Projets */}
              {otherProjects.length > 0 && (
                <div className="relative p-4 lg:p-6 rounded-xl border border-neutral-800 bg-black/90 backdrop-blur-sm flex-1">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl" />
                  <div className="relative space-y-4">
                    <h2 className="text-white/80 text-sm font-medium tracking-wider">Autres projets</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {otherProjects.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <Card className="relative border-neutral-800 bg-black/90 backdrop-blur-sm hover:bg-neutral-900/50 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardContent className="p-4 relative">
                              <h3 className="text-white text-base font-medium mb-1">
                                {link.title}
                              </h3>
                              {link.description && (
                                <p className="text-white/60 text-sm line-clamp-2">
                                  {link.description}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 