import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaCode, FaCogs, FaLightbulb } from 'react-icons/fa';
import './CurrentProject.css';

const CurrentProject = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <FaCode />,
      title: 'Smart Technology',
      description: 'Built with cutting-edge tech stack',
    },
    {
      icon: <FaCogs />,
      title: 'Scalable',
      description: 'Designed for growth and performance',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovative',
      description: 'Solving real-world problems',
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
            A revolutionary software solution that transforms how businesses operate.
            DropIQ combines intelligence with simplicity to deliver powerful results.
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
