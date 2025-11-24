import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNode,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 90 },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 95 },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', level: 85 },
    { name: 'Node.js', icon: <FaNode />, color: '#339933', level: 88 },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: <FaCss3 />, color: '#1572B6', level: 92 },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4', level: 87 },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 82 },
    { name: 'Express', icon: <SiExpress />, color: '#FFFFFF', level: 85 },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', level: 90 },
    { name: 'SQL', icon: <FaDatabase />, color: '#4479A1', level: 83 },
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Skills & Technologies
          {inView && <span className="typed-text">Skills & Technologies</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level-container">
                <motion.div
                  className="skill-level-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                  }}
                />
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-description"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p>
            Constantly learning and adapting to new technologies to deliver cutting-edge solutions.
            My expertise spans across frontend, backend, and database technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
