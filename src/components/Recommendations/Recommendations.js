import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';
import './Recommendations.css';

const Recommendations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="recommendations" className="recommendations section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Recommendations
          {inView && <span className="typed-text">Recommendations</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="recommendations-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="linkedin-recommendations glass-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="linkedin-icon-wrapper">
              <FaLinkedin className="linkedin-icon" />
            </div>
            <h3 className="gradient-text">View My LinkedIn Recommendations</h3>
            <p className="recommendations-description">
              Check out recommendations from colleagues, mentors, and supervisors
              on my LinkedIn profile.
            </p>
            <motion.a
              href="https://www.linkedin.com/in/sai-videsh-ssv/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary linkedin-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin style={{ marginRight: '10px' }} />
              View Recommendations
            </motion.a>
            
            <div className="quote-decoration">
              <FaQuoteLeft />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
