import { SQUAD_DATA } from '../components/3D/SquadData';

export default function ProjectsPage() {
  // Filter out only the high-impact projects
  const projects = SQUAD_DATA.filter(node => node.type === 'project');

  return (
    <div className="w-screen min-h-screen bg-[#0a0a0a] text-white pt-32 px-6 pb-20 overflow-y-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="md:col-span-2 mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Project Architecture</h1>
          <p className="text-xl text-[#10b981] font-medium tracking-widest uppercase mb-6">Production & Deployments</p>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-[#f59e0b]/50 transition-colors group relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#f59e0b] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <h2 className="text-3xl font-bold mb-4 relative z-10">{project.title}</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8 relative z-10">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
              {/* THE FIX: Added '?.' right after techStack so it doesn't crash if it's missing! */}
              {project.techStack?.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a 
                href={project.link} target="_blank" rel="noopener noreferrer"
                className="inline-block py-3 px-6 bg-white/10 hover:bg-white text-white hover:text-black rounded-xl font-bold transition-all relative z-10"
              >
                View Repository
              </a>
            )}
          </div>
        ))}
        
      </div>
    </div>
  );
}