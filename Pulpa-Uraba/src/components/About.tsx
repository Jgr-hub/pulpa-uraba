import { motion } from 'motion/react';
import { CONTACT_INFO } from '@/src/constants';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=800"
                alt="Piña y pulpa"
                className="rounded-[40px] shadow-2xl w-full max-w-md"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-32 h-32 border-2 border-dashed border-accent/30 rounded-full flex items-center justify-center italic text-accent font-display text-sm font-bold"
              >
                HECHO EN COLOMBIA
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold italic font-display text-xl mb-2 block">Nosotros</span>
            <h2 className="font-sans text-4xl md:text-5xl font-black text-primary mb-8 leading-tight uppercase">
              ¿Quiénes Somos?
            </h2>
            <div className="space-y-6 text-zinc-600 font-light text-lg leading-relaxed">
              <p>
                Somos una reconocida empresa líder en la transformación de frutas del agro colombiano. Nos comprometemos con la calidad, la sostenibilidad y la innovación para atender las necesidades del mercado nacional e internacional.
              </p>
              <p>
                Contamos con procesos certificados y tecnología de vanguardia para asegurar que cada pulpa mantenga su esencia natural, ofreciendo soluciones prácticas y saludables para tu día a día.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all shadow-lg"
              >
                Ver Productos
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                className="bg-white text-primary border border-primary/20 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:border-primary transition-all shadow-sm"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
