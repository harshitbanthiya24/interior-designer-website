import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

export default function Testimonials({ data }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % data.length);
  const prev = () => setCurrent((prev) => (prev - 1 + data.length) % data.length);

  return (
    <section id="testimonials" className="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonials-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="testimonial-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-content">
              <motion.div
                className="stars"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {'⭐'.repeat(data[current]?.rating || 5)}
              </motion.div>

              <motion.p
                className="testimonial-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                "{data[current]?.message}"
              </motion.p>

              <motion.div
                className="testimonial-author"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img src={data[current]?.imageUrl} alt={data[current]?.name} />
                <div>
                  <h4>{data[current]?.name}</h4>
                  <p>{data[current]?.title}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-controls">
          <motion.button
            className="nav-btn"
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>

          <div className="dots">
            {data.map((_, index) => (
              <motion.div
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            className="nav-btn"
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
