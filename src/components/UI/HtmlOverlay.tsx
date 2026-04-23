import { useState, useRef} from 'react';
import { Scroll } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

import { 
  SiCplusplus, SiJavascript, SiPython,
  SiNodedotjs, SiExpress, SiPostgresql, SiGithub
} from 'react-icons/si';
import { FaGitAlt, FaLinkedin, FaNetworkWired, FaCode } from 'react-icons/fa';


// UPGRADED: Interactive Skill Badge with Subtitles
const SkillBadge = ({ Icon, name, desc, colorClass }: { Icon: any, name: string, desc: string, colorClass: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-start gap-4 p-4 bg-black/40 border border-white/10 rounded-2xl hover:border-white/30 transition-all cursor-pointer group shadow-lg overflow-hidden relative"
    >
      {/* Subtle background glow on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-current to-transparent ${colorClass}`}></div>
      
      <Icon className={`text-3xl mt-1 text-gray-600 transition-colors duration-300 relative z-10 ${colorClass}`} />
      <div className="flex flex-col relative z-10">
        <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-gray-400 transition-colors mt-0.5">
          {desc}
        </span>
      </div>
    </motion.div>
  );
};

export default function HtmlOverlay() {
  // We use refs instead of state to track inputs so the page doesn't re-render when typing
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    // Trigger the success pop-up
    setIsSent(true);
    
    // Manually clear the form fields
    if (nameRef.current) nameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';

    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <>
      <Scroll html style={{ width: '100%' }}>
        
        {/* PAGE 1: HOME */}
        <div className="w-screen h-screen flex flex-col justify-center items-center text-center px-6">
          <div className="relative mb-8 group mt-12">
            <div className="absolute inset-0 bg-[#10b981] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src="/your-profile-pic.png" 
              alt="Profile" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl z-10"
            />
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter mb-4">
            Milan Shukla
          </h1>
          <p className="text-xl md:text-3xl text-[#10b981] font-medium tracking-widest uppercase mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            Full-Stack Engineer | C++ & Python | DSA
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight max-w-4xl mb-6 leading-snug">
            Designing and building web apps that feel as good as they perform.
          </h2>
          <p className="max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
            Engineer building scalable, secure web applications end-to-end, proficient in C++ and Python, with expertise in data structures and algorithms to deliver efficient, reliable, production-grade solutions.
          </p>
        </div>

        {/* PAGE 2: THE PITCH (Empty space) */}
        <div className="w-screen h-[300vh] pointer-events-none" />

        {/* PAGE 3: THE TRAINING GROUND / SKILLS */}
        <div className="w-screen h-screen flex items-center justify-center px-8">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-3 mb-2">
              <h2 className="text-5xl font-bold text-white tracking-tight">The Training Ground</h2>
              <p className="text-[#10b981] uppercase tracking-widest mt-2 font-semibold">Technical Arsenal & Architecture</p>
            </div>
            
            {/* Bento Box 1: Languages */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#3b82f6]/40 transition-all duration-500 flex flex-col group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#3b82f6] group-hover:animate-ping"></div>
                Languages
              </h3>
              <div className="grid grid-cols-1 gap-3 mt-auto">
                <SkillBadge Icon={SiCplusplus} name="C++" desc="Memory & Systems" colorClass="group-hover:text-[#00599C]" />
                <SkillBadge Icon={SiPython} name="Python" desc="ML & Data Logic" colorClass="group-hover:text-[#3776AB]" />
                <SkillBadge Icon={SiJavascript} name="JavaScript" desc="DOM & Frontend" colorClass="group-hover:text-[#F7DF1E]" />
              </div>
            </div>
            
            {/* Bento Box 2: Backend & Databases */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#8b5cf6]/40 transition-all duration-500 flex flex-col group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8b5cf6] group-hover:animate-ping"></div>
                Backend & DBs
              </h3>
              <div className="grid grid-cols-1 gap-3 mt-auto">
                <SkillBadge Icon={SiNodedotjs} name="Node.js" desc="Runtime Env" colorClass="group-hover:text-[#339933]" />
                <SkillBadge Icon={SiExpress} name="Express" desc="RESTful APIs" colorClass="group-hover:text-white" />
                <SkillBadge Icon={SiPostgresql} name="PostgreSQL" desc="Relational Data" colorClass="group-hover:text-[#4169E1]" />
              </div>
            </div>

            {/* Bento Box 3: Core & Tools */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#f59e0b]/40 transition-all duration-500 flex flex-col group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f59e0b] group-hover:animate-ping"></div>
                Core & Tools
              </h3>
              <div className="grid grid-cols-1 gap-3 mt-auto">
                <SkillBadge Icon={FaNetworkWired} name="DSA" desc="Optimization" colorClass="group-hover:text-[#10b981]" />
                <SkillBadge Icon={FaCode} name="OOP" desc="Architecture" colorClass="group-hover:text-[#10b981]" />
                <SkillBadge Icon={FaGitAlt} name="Git / GitHub" desc="Version Control" colorClass="group-hover:text-[#F05032]" />
              </div>
            </div>

            {/* --- NEW: THE ACTIVE TERMINAL (Col-span-3) --- */}
            <div className="md:col-span-3 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-6 font-mono text-sm group hover:border-[#10b981]/50 transition-colors">
              <div className="hidden md:flex flex-col gap-1 px-4 border-r border-white/10 text-gray-600">
                <span>01</span><span>02</span><span>03</span>
              </div>
              <div className="flex-1">
                <div className="text-gray-500 mb-2 flex items-center gap-2">
                  <span className="text-[#10b981]">~/engineering/status</span> 
                  <span className="text-gray-600">--current-focus</span>
                </div>
                <div className="text-gray-300 leading-relaxed">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">currentObjective</span> = <span className="text-green-400">"Building scalable systems and sharpening DSA for real-world performance"</span>;
                  <br />
                  <span className="text-purple-400">await</span> system.<span className="text-yellow-200">optimize</span>(currentObjective);
                  <span className="inline-block w-2 h-4 bg-[#10b981] ml-2 animate-pulse align-middle"></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* PAGE 4: THE MANAGER'S DESK / CONTACT */}
        <div className="w-screen h-screen flex flex-col items-center justify-center px-8 pb-20 relative">
          
          <div className="max-w-2xl w-full bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
            <h2 className="text-4xl font-bold text-white mb-2">Contact Me!</h2>
            <p className="text-gray-400 font-light mb-8">Open to roles, open-source collaborations and Freelancing.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  ref={nameRef} // <-- Using ref instead of value/onChange
                  placeholder="Name" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#10b981] transition-colors" 
                />
                <input 
                  type="email" 
                  required
                  ref={emailRef} // <-- Using ref
                  placeholder="Email" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#10b981] transition-colors" 
                />
              </div>
              <textarea 
                required
                ref={messageRef} // <-- Using ref
                placeholder="Message" 
                rows={4} 
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#10b981] transition-colors resize-none" 
              />
              <button 
                type="submit" 
                className="mt-4 w-full py-4 bg-[#10b981] text-black font-bold uppercase tracking-widest rounded-xl hover:bg-[#0ea5e9] transition-colors"
              >
                Fire! 🚀
              </button>
            </form>
          </div>

          <div className="absolute bottom-12 flex gap-8 z-10">
            
            <a 
              href="https://github.com/MilanShukla11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 group"
            >
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/40 group-hover:-translate-y-2 transition-all duration-300">
                <SiGithub size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <span className="font-bold tracking-widest uppercase text-xs text-gray-500 group-hover:text-white transition-colors">
                GitHub
              </span>
            </a>

            <a 
              href="https://www.linkedin.com/in/milan-shukla-bb2a87283/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 group"
            >
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#0A66C2]/50 group-hover:-translate-y-2 transition-all duration-300">
                <FaLinkedin size={24} className="text-gray-400 group-hover:text-[#0A66C2] transition-colors" />
              </div>
              <span className="font-bold tracking-widest uppercase text-xs text-gray-500 group-hover:text-[#0A66C2] transition-colors">
                LinkedIn
              </span>
            </a>

          </div>

        </div>

      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-[#10b981] text-black px-6 py-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <CheckCircle size={22} className="text-black" />
            <span className="font-bold tracking-widest uppercase text-sm">
              Boom! Message sent 💥
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Scroll>
    </>
  );
}