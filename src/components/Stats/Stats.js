import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaCoffee, FaGithub } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      id: 1,
      icon: <FaCode />,
      number: '50+',
      label: 'Projects Completed',
      color: '#ff0000',
    },
    {
      id: 2,
      icon: <FaGithub />,
      number: '500+',
      label: 'GitHub Contributions',
      color: '#ff0000',
    },
    {
      id: 3,
      icon: <FaUsers />,
      number: '30+',
      label: 'Happy Clients',
      color: '#ff0000',
    },
    {
      id: 4,
      icon: <FaCoffee />,
      number: '1000+',
      label: 'Cups of Coffee',
      color: '#ff0000',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="stats" className="stats section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Overall Statistics
          {inView && <span className="typed-text">Overall Statistics</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="stat-box glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="github-contrib-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="contrib-title">
            <span className="terminal-bracket">{'['}</span> GitHub Activity{' '}
            <span className="terminal-bracket">{']'}</span>
          </h3>
          <div className="github-graph glass-card">
            <img
              src="https://ghchart.rshah.org/ff0000/Sai-Videsh"
              alt="GitHub Contribution Graph"
              className="contrib-graph"
            />
            <p className="contrib-note">
              Replace 'Sai-Videsh' with your GitHub username in Stats.js
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
