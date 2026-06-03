import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

export default function Portfolio({ data }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Bathroom', 'Commercial'];

  const filtered = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Portfolio
      </motion.h2>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="portfolio-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            className="portfolio-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="card-image-container">
              <img src={item.imageUrl} alt={item.title} />
              <motion.div
                className="card-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
