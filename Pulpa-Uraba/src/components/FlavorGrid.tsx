import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/constants';

export default function FlavorGrid() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-4xl md:text-5xl font-black text-primary uppercase"
          >
            SABORES <span className="text-accent">PULPAS URABÁ</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((fruit, index) => (
            <motion.div
              key={fruit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center bg-fresh p-6 rounded-3xl group cursor-pointer transition-shadow hover:shadow-xl"
            >
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-sans font-bold text-primary group-hover:text-accent transition-colors">
                {fruit.name}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center gap-4">
           <button className="bg-primary text-white px-10 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all shadow-lg">
             Ver Productos
           </button>
           <button className="bg-transparent text-primary hover:text-accent px-10 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all">
             Hablemos
           </button>
        </div>
      </div>
    </section>
  );
}
