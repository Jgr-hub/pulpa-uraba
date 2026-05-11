import { motion } from 'motion/react';
import { DISPLAY_SHELF_URL } from '@/src/constants';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=1000',
  DISPLAY_SHELF_URL,
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1621506289937-487493e9fd47?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1512149387383-1c390632ecdd?auto=format&fit=crop&q=80&w=1000',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Inspiración Visual
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary"
          >
            Directo del <span className="italic">Campo</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${
                index === 2 ? 'md:col-span-2 row-span-1' : ''
              }`}
            >
              <img
                src={img}
                alt={`Galería ${index}`}
                className="w-full h-64 md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
