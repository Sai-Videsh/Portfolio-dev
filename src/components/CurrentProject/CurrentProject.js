import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaCogs, FaLightbulb,FaSearch, FaLayerGroup, FaBolt } from 'react-icons/fa';
import './CurrentProject.css';

const CurrentProject = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
  {
    icon: <FaSearch className="text-xl md:text-2xl" />,
    title: 'Unified Search',
    description: 'One query across multiple e-commerce stores',
  },
  {
    icon: <FaLayerGroup className="text-xl md:text-2xl" />,
    title: 'Aggregated Catalog',
    description: 'Merges product data into a single clean view',
  },
  {
    icon: <FaBolt className="text-xl md:text-2xl" />,
    title: 'Smart Comparison',
    description: 'Highlights prices, specs, and deals instantly',
  },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="current-project" className="current-project section">
      <div className="container">
        <motion.div
          ref={ref}
          className="current-project-content"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="current-project-badge"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          >
            <FaRocket />
          </motion.div>

          <motion.h2
            className="current-project-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Currently Building
          </motion.h2>

          <motion.div
            className="current-project-name"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            DropIQ
          </motion.div>

          <motion.p
            className="current-project-description"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
           A unified tool that lets you search for a product once and instantly see results from multiple e-commerce stores. It gathers each product’s price, details, and buy-now link into one place so users don’t need to check every site manually. Built to simplify comparison shopping and save time.
           </motion.p>

          <motion.div
            className="current-project-features"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glass-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="current-project-status"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="status-indicator"></div>
            <span>In Active Development</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentProject;
