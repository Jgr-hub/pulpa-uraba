import { motion } from 'motion/react';
import { CONTACT_INFO } from '@/src/constants';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <section className="py-32 bg-primary overflow-hidden relative">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-[150px] z-0"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-10 backdrop-blur-xl border border-white/20">
            <MessageCircle size={40} className="text-accent" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
            ¿LISTO PARA <br />
            <span className="italic text-accent">FRESCURA</span> REAL?
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Haz tu pedido ahora mismo por WhatsApp y recibe el sabor de la mejor fruta en la puerta de tu casa o negocio.
          </p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
            className="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl hover:shadow-accent/40"
          >
            Chatear con nosotros
          </a>
        </motion.div>
      </div>
    </section>
  );
}
