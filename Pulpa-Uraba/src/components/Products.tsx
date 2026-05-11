import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-fresh relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-4xl md:text-5xl font-black text-primary text-center mb-16 uppercase"
        >
          Nuestros <span className="text-accent">Productos</span>
        </motion.h2>

        <div className="relative">
          <div className="flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[380px] snap-center group"
              >
                <div className="bg-white rounded-[40px] p-8 shadow-xl border border-zinc-100 hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
                  <div className="h-64 mb-8 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-zinc-400 mb-6 uppercase tracking-wider">{product.name}</h3>
                  <button className="bg-primary text-white px-10 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all">
                    Ver Producto
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation indicators */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-lg hover:bg-primary transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-lg hover:bg-primary transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
