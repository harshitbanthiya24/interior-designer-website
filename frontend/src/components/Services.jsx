import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Residential Design',
      description: 'Create beautiful living spaces tailored to your lifestyle'
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Commercial Design',
      description: 'Professional office and retail space transformation'
    },
    {
      id: 3,
      icon: '🎨',
      title: 'Color Consultation',
      description: 'Expert color schemes that bring harmony to any space'
    },
    {
      id: 4,
      icon: '🛋️',
      title: 'Furniture Selection',
      description: 'Curated furniture choices that match your style'
    },
    {
      id: 5,
      icon: '💡',
      title: 'Lighting Design',
      description: 'Ambient lighting solutions for every room'
    },
    {
      id: 6,
      icon: '🏗️',
      title: 'Space Planning',
      description: 'Optimize your space for functionality and aesthetics'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="services">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: '0 20px 40px rgba(196, 167, 71, 0.2)'
            }}
          >
            <motion.div
              className="service-icon"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {service.icon}
            </motion.div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
