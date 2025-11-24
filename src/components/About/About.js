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
              className="about-card glass-card"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="gradient-text">Who I Am</h3>
              <p>
                I'm a passionate developer with a love for creating innovative web solutions.
                With expertise in modern web technologies, I transform complex problems into
                simple, beautiful, and intuitive designs.
              </p>
              <p>
                My journey in development started with curiosity and has evolved into a
                professional pursuit of excellence. I believe in writing clean, maintainable
                code and staying updated with the latest industry trends.
              </p>
            </motion.div>

            <motion.div
              className="about-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="gradient-text">What I Do</h3>
              <p>
                I specialize in building responsive web applications using cutting-edge
                technologies. From frontend design to backend architecture, I handle the
                full spectrum of web development.
              </p>
              <ul className="about-list">
                <li>🚀 Full Stack Web Development</li>
                <li>🎨 UI/UX Design & Implementation</li>
                <li>📱 Responsive & Mobile-First Design</li>
                <li>⚡ Performance Optimization</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="stat-number gradient-text">50+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>

            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="stat-number gradient-text">3+</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>

            <motion.div
              className="stat-card glass-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="stat-number gradient-text">30+</div>
              <div className="stat-label">Happy Clients</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
