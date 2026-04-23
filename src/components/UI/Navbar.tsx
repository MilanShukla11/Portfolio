import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../../store/useStore';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = useStore((state) => state.currentRoute);
  const scrollToSection = useStore((state) => state.scrollToSection);

  const routes = ['HOME', 'PROJECTS', 'SKILLS', 'CONTACT'];

  // If we are on the projects page, override the active highlight
  const activeItem = location.pathname === '/projects' ? 'PROJECTS' : currentRoute;

  const handleNavigation = (route: string) => {
    if (route === 'PROJECTS') {
      navigate('/projects');
    } else {
      // If we are on the Projects page and click Home/Skills/Contact, route back to Root first
      if (location.pathname !== '/') {
        navigate('/');
        // Give the 3D Canvas 100ms to mount before scrolling
        setTimeout(() => triggerScroll(route), 100); 
      } else {
        triggerScroll(route);
      }
    }
  };

  const triggerScroll = (route: string) => {
    if (!scrollToSection) return;
    // Map the routes to their specific scroll percentages (0 to 1)
    if (route === 'HOME') scrollToSection(0);
    // 0.8 perfectly targets the Skills page (Page 4 out of 5 scrollable sections)
    if (route === 'SKILLS') scrollToSection(0.8); 
    // 1.0 targets the very bottom
    if (route === 'CONTACT') scrollToSection(1.0); 
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-2 rounded-full shadow-2xl">
        {routes.map((route) => (
          <button 
            key={route}
            onClick={() => handleNavigation(route)}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-500 cursor-pointer ${
              activeItem === route 
                ? 'bg-white text-black' 
                : 'text-gray-500 bg-transparent hover:text-white'
            }`}
          >
            {route}
          </button>
        ))}
      </div>
    </nav>
  );
}