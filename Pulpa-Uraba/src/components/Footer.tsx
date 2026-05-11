import { motion } from 'motion/react';
import { Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, LOGO_URL } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-fresh pt-24 pb-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <img 
              src={LOGO_URL} 
              alt="Logo" 
              className="h-16 w-auto mb-8" 
              referrerPolicy="no-referrer"
            />
            <h3 className="font-display text-4xl font-bold text-primary mb-6 leading-tight">
              Llevando la frescura <br /> de la tierra a tu hogar.
            </h3>
            <p className="text-zinc-500 font-light max-w-md mb-8">
              Pulpas Urabá: El sabor de lo natural, fruta 100% antioqueña seleccionada con amor y respeto por el campo.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.instagram} className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-600">
              <li><a href="#about" className="hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Nuestras Frutas</a></li>
              <li><a href="#benefits" className="hover:text-accent transition-colors">Beneficios</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Galería</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-8">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-primary/5 p-2 rounded-lg text-primary">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-light leading-relaxed text-zinc-600">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="bg-primary/5 p-2 rounded-lg text-primary">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-light text-zinc-600">
                  {CONTACT_INFO.whatsapp}
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="bg-primary/5 p-2 rounded-lg text-primary">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-light text-zinc-600">
                  hola@pulpasuraba.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-primary/30">
            © {new Date().getFullYear()} PULPAS URABÁ. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-primary/30">
            <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
