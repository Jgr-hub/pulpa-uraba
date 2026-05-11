/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import FlavorGrid from './components/FlavorGrid';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { CONTACT_INFO } from './constants';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        <Products />
        <About />
        <FlavorGrid />
        
        {/* Certifications Mimic */}
        <section className="py-16 bg-fresh border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-center text-primary/30 font-bold uppercase tracking-[0.4em] text-xs mb-12">Certificaciones & Calidad</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
              <div className="flex items-center gap-2">
                <ShieldCheck size={32} />
                <span className="font-bold">INVIMA</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={32} />
                <span className="font-bold">HACCP</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={32} />
                <span className="font-bold">ISO 9001</span>
              </div>
            </div>
          </div>
        </section>

        <Benefits />
        <Gallery />
        <WhatsAppCTA />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* Page Smooth Reveal Overlay */}
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: "-100%" }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="fixed inset-0 bg-primary z-[200] pointer-events-none flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-display text-white text-2xl font-bold tracking-[0.5em] uppercase"
        >
          Pulpas Urabá
        </motion.span>
      </motion.div>
    </div>
  );
}

