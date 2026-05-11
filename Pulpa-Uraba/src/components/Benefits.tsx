import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Zap, Heart } from 'lucide-react';

const BENEFITS = [
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: '100% Natural',
    description: 'Sin conservantes, sin colorantes. Solo la fruta pura del campo antioqueño.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: 'Máxima Higiene',
    description: 'Procesos rigurosos de limpieza y empaque para garantizar tu salud.',
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: 'Listas para Usar',
    description: 'Ahorra tiempo. Pelada y picada, lista para tus jugos, batidos o recetas.',
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: 'Bienestar Total',
    description: 'Conserva todas las vitaminas y antioxidantes de la fruta fresca.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              ¿Por qué elegirnos?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              Cuidamos tu <span className="italic text-accent">Bienestar</span> con cada trozo de fruta.
            </motion.h2>
            <p className="text-white/60 font-light text-lg mb-12 max-w-xl">
              Nuestra misión es facilitar una alimentación saludable y natural, eliminando las barreras del tiempo y la preparación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="bg-accent p-3 rounded-2xl w-fit mb-6 shadow-lg shadow-accent/20">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
