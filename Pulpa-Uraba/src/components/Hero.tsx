import { motion, useScroll, useTransform } from 'motion/react';
import { CONTACT_INFO, DISPLAY_SHELF_URL, LOGO_URL } from '@/src/constants';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-white">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans font-bold text-primary text-xl md:text-2xl mb-2 tracking-tight"
          >
            PULPA DE FRUTA CONGELADA
          </motion.h2>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black leading-[1] mb-4 text-primary">
            100% <span className="font-script text-accent italic font-normal normal-case">Natural</span>
          </h1>
          <p className="font-sans text-lg text-zinc-600 max-w-lg mb-10 font-light leading-relaxed">
            Del campo a tu mesa, cada empaque refleja nuestro compromiso con la calidad, conservando la frescura y el sabor único de la mejor fruta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#products"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent transition-all shadow-xl"
            >
              Ver Productos
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
              className="px-10 py-4 rounded-full font-bold uppercase tracking-widest border border-primary/20 text-primary hover:border-primary transition-colors"
            >
              Hablemos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Main Product Image */}
          <div className="relative z-10 animate-float">
            <img
              src="https://storage.googleapis.com/feedback-portal-bucket/06689fc6-cbf3-4649-ae76-a6fc3f0d4d0d/image_1.png"
              alt="Producto Pulpa"
              className="w-full max-w-[450px] h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating fruits / slices */}
          <motion.img
             animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=300"
             className="absolute -top-10 -right-10 w-40 h-40 object-cover rounded-full z-0 opacity-80 shadow-2xl"
             referrerPolicy="no-referrer"
          />
          <motion.img
             animate={{ y: [0, 25, 0], rotate: [0, -20, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             src="https://images.unsplash.com/photo-1591130901021-3958079ed301?auto=format&fit=crop&q=80&w=250"
             className="absolute bottom-0 -left-10 w-32 h-32 object-cover rounded-full z-20 opacity-90 shadow-2xl"
             referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary/40 flex flex-col items-center gap-2"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
