import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function NodeOverlay() {
  const { activeNode, setActiveNode } = useStore();

  return (
    // AnimatePresence allows the card to animate smoothly when it closes
    <AnimatePresence>
      {activeNode && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          // Fixed positioning to stay dead-center on the screen
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4"
        >
          <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            <button 
              onClick={() => setActiveNode(null)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              {/* Glowing dot matching the node's color */}
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: activeNode.color, boxShadow: `0 0 15px ${activeNode.color}` }} 
              />
              <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                {activeNode.type === 'project' ? 'Featured Output' : 'Core Architecture'}
              </h3>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{activeNode.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              System logic, deployment details, and technical architecture for {activeNode.title}. 
            </p>

            <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all border border-white/10">
              View Deployment
            </button>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}