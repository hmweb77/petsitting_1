"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-green-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-yellow-400"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="DJ Pulse performing"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-yellow-100">
              With over a decade of experience, I've mastered the art of reading crowds and creating 
              unforgettable atmospheres. My signature style blends Brazilian funk, Portuguese house, 
              and international hits with unexpected remixes that keep the dance floor energized.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-900/50 border border-yellow-500/20 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">500+</h3>
                <p className="text-yellow-100">Events</p>
              </div>
              <div className="p-4 bg-blue-900/50 border border-yellow-500/20 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">50+</h3>
                <p className="text-yellow-100">Venues</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}