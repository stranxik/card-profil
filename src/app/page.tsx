import { Link } from 'react-router-dom';
import { links } from "@/data/links";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon } from "lucide-react";
import { ThreadsIcon } from "@/components/icons/threads-icon";

// Séparons les liens en deux catégories
const projectLinks = links.filter(link => 
  !['GitHub', 'LinkedIn', 'Contact', 'Threads'].includes(link.title)
);

const socialLinks = links.filter(link => 
  ['GitHub', 'LinkedIn', 'Contact', 'Threads'].includes(link.title)
);

export default function LinksPage() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'github':
        return <GithubIcon className="w-5 h-5" />;
      case 'contact':
        return <MailIcon className="w-5 h-5" />;
      case 'threads':
        return <ThreadsIcon className="w-5 h-5" />;
      default:
        return <ExternalLinkIcon className="w-5 h-5" />;
    }
  };

  return (
    <main className="min-h-screen bg-black dotted-background p-4 md:p-8 flex items-center justify-center overflow-y-auto home-page">
      <>
        {/* Desktop CV Link */}
        <Link 
          to="/cv" 
          className="fixed right-8 top-1/2 -translate-y-1/2 group hidden md:block"
        >
          <Card className="border-neutral-800 bg-black hover:bg-neutral-900/50 transition-colors -rotate-90 origin-right translate-x-2">
            <CardContent className="p-4 flex items-center justify-center">
              <span className="text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                Découvrir mon CV
              </span>
            </CardContent>
          </Card>
        </Link>

        {/* Mobile CV Link */}
        <Link 
          to="/cv" 
          className="absolute left-4 bottom-8 block md:hidden"
        >
          <Card className="border-neutral-800 bg-black hover:bg-neutral-900/50 transition-colors">
            <CardContent className="p-4 flex items-center justify-center">
              <span className="text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
                Découvrir mon CV
              </span>
            </CardContent>
          </Card>
        </Link>
      </>

      <div className="w-full max-w-2xl space-y-6 pb-24">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-28 h-28 mx-auto rounded-full bg-black profile-ring overflow-hidden">
            <img 
              src="/images/thibaultsouris.jpeg"
              alt="Thibault Souris"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-white">
              Thibault Souris
            </h1>
            <p className="text-white/80">
              Product Manager | IA & Automatisation
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
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
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-2">
          {projectLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="border-neutral-800 bg-black hover:bg-neutral-900/50 transition-colors h-[120px]">
                <CardContent className="p-4 h-full flex flex-col">
                  <h3 className="text-white">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-white/60 mt-1 line-clamp-2 text-sm">
                      {link.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
} 