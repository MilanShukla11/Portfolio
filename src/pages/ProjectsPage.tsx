import { SQUAD_DATA } from '../components/3D/SquadData';
import { SiGithub } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';

export default function ProjectsPage() {
  const projects = SQUAD_DATA.filter(node => node.type === 'project');

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] text-white overflow-y-auto relative">
      
      {/* Football pitch background (subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Grass pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #10b981 0px, #10b981 2px, transparent 2px, transparent 12px)' }} />
          {/* Pitch lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-white/20"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-white/20"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-white/20"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-white/20"></div>
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-3 bg-gradient-to-r from-white via-[#10b981] to-white bg-clip-text text-transparent">
            MATCH DAY
          </h1>
          <p className="text-[#10b981] font-mono uppercase tracking-widest text-sm">
            Starting XI
          </p>
          <div className="w-16 h-0.5 bg-[#10b981]/50 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Vertical Projects */}
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:border-[#10b981]/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              {/* Shirt number style */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#10b981] flex items-center justify-center font-black text-black text-xl shadow-lg">
                {idx + 1}
              </div>

              <div className="ml-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight flex items-center gap-3 flex-wrap">
                  {project.title}
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 font-mono">
                    {project.techStack?.[0] || 'Project'}
                  </span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>
                
                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack?.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (GitHub & Live) */}
                <div className="flex flex-wrap gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-xl border border-white/20 hover:border-[#10b981] transition-all duration-300 hover:-translate-y-1"
                    >
                      <SiGithub className="w-5 h-5 text-gray-400 group-hover/btn:text-[#10b981] transition-colors" />
                      <span className="font-mono text-sm tracking-wide">Repository</span>
                      <span className="text-xs ml-1 transition-transform duration-300 group-hover/btn:translate-x-1">⚽</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-5 py-2.5 bg-[#10b981]/10 rounded-xl border border-[#10b981]/30 hover:bg-[#10b981]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                      <TbWorld className="w-5 h-5 text-[#10b981]" />
                      <span className="font-mono text-sm tracking-wide text-[#10b981]">Live Demo</span>
                      <span className="text-xs ml-1 transition-transform duration-300 group-hover/btn:translate-x-1">🎯</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative corner football */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <div className="w-full h-full rounded-full border-4 border-[#10b981] animate-spin-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl">⚽</div>
              </div>
            </div>
          ))}
        </div>

        {/* Substitution bench / End note */}
        <div className="text-center mt-16 text-sm text-gray-500 font-mono">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            Ready for more projects. Contact me for a trial.
          </div>
        </div>
      </div>
    </div>
  );
}