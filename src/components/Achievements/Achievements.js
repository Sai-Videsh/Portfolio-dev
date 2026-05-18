import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaStar } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {
    if (window.innerWidth <= 768) {
      setFlippedCardId(flippedCardId === id ? null : id);
    }
  };

  const certificates = [
    {
      id: 1,
      title: 'C, Python & Linux',
      issuer: 'Spoken Tutorial, IIT Bombay',
      date: '2024',
      brief: 'Mastered software programming fundamentals in C and Python combined with advanced Linux system administration.',
      position: 'card1',
      link: '#',
    },
    {
      id: 2,
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: '2024',
      brief: 'Studied cloud infrastructure, virtualization, map-reduce architectures, and distributed systems.',
      position: 'card2',
      link: '#',
    },
    {
      id: 3,
      title: 'Front-End Development',
      issuer: 'IBM SkillsBuild',
      date: '2024',
      brief: 'Completed intensive virtual internship specializing in responsive modern web architectures and UI/UX design.',
      position: 'card3',
      link: '#',
    },
    {
      id: 4,
      title: 'Tech Job Simulations',
      issuer: 'Deloitte & Tata (Forage)',
      date: '2025',
      brief: 'Executed technology consulting workflows, cloud migrations strategy, and designed dynamic data dashboards.',
      position: 'card4',
      link: '#',
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Open Source Contributor',
      description: 'Contributions to some projects in IEEE SoC',
      icon: <FaStar />,
    },
    {
      id: 2,
      title: 'SIH 2025 - Institute Level',
      description: 'Select in Smart India Hackathon 2025 at institute level',
      icon: <FaTrophy />,
    },
    // {
    //   id: 3,
    //   title: 'Best Project Award',
    //   description: 'Outstanding capstone project recognition',
    //   icon: <FaMedal />,
    // },
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
    <section id="achievements" className="achievements section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Certificates & Achievements
          {inView && <span className="typed-text">Certificates & Achievements</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="achievements-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="certificates-section">
            <h3 className="subsection-title">
              <span className="terminal-bracket">{'['}</span> Certifications{' '}
              <span className="terminal-bracket">{']'}</span>
            </h3>
            <div className="certificates-collage">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  className={`collage-card glass-card ${cert.position} ${flippedCardId === cert.id ? 'flipped' : ''}`}
                  variants={itemVariants}
                  onClick={() => handleCardClick(cert.id)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="cert-header">
                        <h4 className="cert-title">{cert.title}</h4>
                        <span className="cert-issuer">{cert.issuer}</span>
                      </div>
                      
                      <div className="cert-body desktop-only">
                        <p className="cert-brief">{cert.brief}</p>
                      </div>

                      <div className="cert-footer">
                        <span className="cert-date">{cert.date}</span>
                        <span className="cert-tap-hint mobile-only">[ Tap.. ]</span>
                      </div>
                    </div>

                    <div className="card-back mobile-only">
                      <div className="cert-body">
                        <p className="cert-brief">{cert.brief}</p>
                      </div>
                      {/* <div className="cert-footer">
                        <span className="cert-tap-hint">[ Tap to flip back ]</span>
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h3 className="subsection-title">
              <span className="terminal-bracket">{'['}</span> Achievements{' '}
              <span className="terminal-bracket">{']'}</span>
            </h3>
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  className="achievement-card glass-card"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
