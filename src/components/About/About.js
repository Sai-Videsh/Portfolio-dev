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
               I am an IIIT student, loves to solve new problems with suitable technical solutions. jack of many trades, done a couple of  internships, have experience in building real projects and shipping them, attended some hackathons, done open source contributions and certifications. Also a technical content creator.
              </p>
              
            </motion.div>

            <motion.div
              className="about-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="gradient-text">What I Do</h3>
             <p>
               I am an freelancer, running an agency along with my friends where We build AI solutions for businesses to make it more efficient and productive, mainly for local businesses who are not online.
               And also build some micro saas apps that solve a very small or a specific problem. Currently working on one.
              Also, a Content creator sharing my journey and stuffs related to AI and Business, mainly for students.
              Looking for more collaborations.
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
