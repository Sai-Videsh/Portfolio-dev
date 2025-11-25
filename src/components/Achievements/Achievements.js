import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaCertificate, FaStar, FaMedal } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const certificates = [
    {
      id: 1,
      title: 'Java Programming',
      issuer: 'NPTEL',
      date: '2024',
      icon: <FaCertificate />,
      link: `https://drive.google.com/file/d/${process.env.REACT_APP_CERT_ACHIEVEMENT_1}/view`,
    },
    {
      id: 2,
      title: 'Spoken Tutorial - IIT Bombay',
      issuer: 'IIT Bombay',
      date: '2024',
      icon: <FaCertificate />,
      link: `https://drive.google.com/file/d/${process.env.REACT_APP_CERT_ACHIEVEMENT_2}/view`,
    },
    {
      id: 3,
      title: 'Job Simulation - Deloitte',
      issuer: 'Forage',
      date: '2025',
      icon: <FaCertificate />,
      link: `https://drive.google.com/file/d/${process.env.REACT_APP_CERT_ACHIEVEMENT_3}/view`,
    },
    // {
    //   id: 4,
    //   title: 'JavaScript Algorithms and Data Structures',
    //   issuer: 'freeCodeCamp',
    //   date: '2022',
    //   icon: <FaCertificate />,
    //   link: `https://drive.google.com/file/d/${process.env.REACT_APP_CERT_ACHIEVEMENT_4}/view`,
    // },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Open Source Contributor',
      description: '10+ contributions to projects in IEEE SoC',
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
            <div className="certificates-grid">
              {certificates.map((cert) => (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-card glass-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-date">{cert.date}</span>
                  <span className="view-cert">[ VIEW CERTIFICATE ]</span>
                </motion.a>
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
