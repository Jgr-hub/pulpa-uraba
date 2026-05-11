import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL } from '@/src/constants';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(248, 249, 248, 0)', 'rgba(248, 249, 248, 0.9)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ['none', '0 4px 20px rgba(0,0,0,0.05)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src={LOGO_URL} 
            alt="Pulpa Urabá" 
            className="h-12 w-auto" 
            referrerPolicy="no-referrer"
          />
          <span className="hidden md:block font-display text-xl font-bold text-primary tracking-tight">
            Pulpas Urabá
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:text-accent transition-colors">Sobre Nosotros</a>
          <a href="#products" className="hover:text-accent transition-colors">Productos</a>
          <a href="#benefits" className="hover:text-accent transition-colors">Beneficios</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Galería</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary hover:text-white rounded-full transition-all"
          >
            <Instagram size={20} />
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
            className="hidden sm:flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg overflow-hidden relative group"
          >
            <span className="relative z-10">Ver Productos</span>
            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
