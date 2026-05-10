import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { GlassCard, BrutalistButton } from "@/components/ui/core";
import Image from "next/image";
import Link from "next/link";
import { Dock, HamburgerMenu, StickyCVCTA } from "@/components/layout/Navigation";

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = portfolioData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-newsprint min-h-screen">
      <HamburgerMenu />
      <Dock />
      <StickyCVCTA />

      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12">
        {/* Sticky Glass Sidebar */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg:top-24">
            <GlassCard className="p-8 border-jet/10 bg-white/40 shadow-xl">
              <h1 className="font-heading text-5xl font-bold uppercase tracking-tighter leading-none mb-6">
                {project.title}
              </h1>

              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-[10px] uppercase font-bold text-jet/40 mb-2">Category</h4>
                  <p className="font-heading text-xl font-bold uppercase">{project.category}</p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] uppercase font-bold text-jet/40 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-jet text-white font-mono text-[10px] uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-4">
                  {project.github && (
                    <a href={project.github} target="_blank" className="w-full">
                      <BrutalistButton variant="primary" className="w-full py-3 text-sm">
                        VIEW ON GITHUB
                      </BrutalistButton>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" className="w-full">
                      <BrutalistButton variant="outline" className="w-full py-3 text-sm">
                        LIVE DEMO
                      </BrutalistButton>
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>

            <Link href="/#projects" className="inline-block mt-8 font-mono text-xs font-bold hover:text-cobalt transition-colors group">
              <span className="inline-block transform group-hover:-translate-x-1 transition-transform mr-2">←</span>
              BACK TO DROPS
            </Link>
          </div>
        </aside>

        {/* Scrollable Content Area */}
        <main className="lg:w-2/3 space-y-12">
          {/* Main Showcase Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-jet shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover halftone"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter mb-6">Execution Strategy</h2>
            <p className="font-body text-xl text-jet/80 leading-relaxed">
              {project.description}
            </p>

            {project.subProjects && (
               <div className="mt-8 bg-white p-8 border-2 border-dashed border-jet">
                  <h3 className="font-heading text-2xl font-bold uppercase mb-4">Core Modules</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.subProjects.map(sub => (
                       <li key={sub} className="flex items-center gap-2 font-mono text-sm">
                          <span className="w-2 h-2 bg-cobalt" />
                          {sub}
                       </li>
                    ))}
                  </ul>
               </div>
            )}
          </div>

          {/* Placeholder Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
             {[1, 2].map((i) => (
                <div key={i} className="relative aspect-square bg-white border-2 border-jet grayscale hover:grayscale-0 transition-all cursor-crosshair">
                   <Image
                      src={`https://picsum.photos/seed/project-${project.id}-${i}/800/800`}
                      alt="Gallery"
                      fill
                      className="object-cover opacity-50 hover:opacity-100 transition-opacity"
                   />
                   <div className="absolute top-4 left-4 font-mono text-[10px] bg-jet text-white px-2 py-1">
                      IMG_00{i}.RAW
                   </div>
                </div>
             ))}
          </div>
        </main>
      </div>
    </div>
  );
}
