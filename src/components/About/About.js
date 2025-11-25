import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          About Me
          {inView && <span className="typed-text">About Me</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.div
              className="about-photo-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="photo-container">
                <img src="/profile.png" alt="Sai Videsh" className="about-photo" />
                <div className="photo-corner photo-corner-tl"></div>
                <div className="photo-corner photo-corner-tr"></div>
                <div className="photo-corner photo-corner-bl"></div>
                <div className="photo-corner photo-corner-br"></div>
              </div>
              <h3 className="gradient-text" style={{ marginTop: '20px', textAlign: 'center' }}>Sai Videsh</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Emerging founder, Content Creator and Developer</p>
            </motion.div>

            <motion.div
              className="about-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="gradient-text">Who I Am</h3>
              <p>
                I am Sai Videsh, someone who has explored many paths like coding, design, content, freelancing, and early startup attempts, picking up skills quickly and learning through direct trials. I’m not shaped by a single track but by the range of things I’ve tried, giving me a broad, practical understanding and a direction which I’m now sharpening it into mastery.
              </p>
              
            </motion.div>

            <motion.div
              className="about-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="gradient-text">What I Do</h3>
             <p>
                 I'm currently building DropIQ, a unified search layer that collects product data from multiple e-commerce stores and presents it in one place. 
                 I'm also running an Agency in which me with my team where We build AI-powered MVPs that learn from users and turn ideas into investor-ready products. 
               Along with this, I am learning agentic AI, retrieval-augmented generation, and practical AI toolchains so I can build systems that automate tasks and speed up development.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="stat-number gradient-text">15+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>

            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="stat-number gradient-text">7.8</div>
              <div className="stat-label">CGPA</div>
            </motion.div>

            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="stat-number gradient-text">7+</div>
              <div className="stat-label">Certifications</div>
            </motion.div>

            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="stat-number gradient-text">3+</div>
              <div className="stat-label">Years Coding</div>
            </motion.div>

            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="stat-number gradient-text">250+</div>
              <div className="stat-label">GitHub Commits</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
