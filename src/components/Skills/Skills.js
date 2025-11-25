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
  FaGithub,
  FaLinux,
  FaCode,
  FaBrain,
  FaUsers,
  FaBug,
  FaJava,
  FaRobot,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVisualstudiocode,
  SiCanva,
  SiNotion,
  SiVercel,
  SiRender,
  SiPostgresql,
  SiMysql,
  SiKaggle,
  SiPostman,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    // Programming Languages
    { name: 'C', icon: <SiC />, color: '#A8B9CC', level: 92, category: 'languages' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C', level: 72, category: 'languages' },
    { name: 'Java', icon: <FaJava />, color: '#007396', level:70, category: 'languages' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', level: 89, category: 'languages' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 82, category: 'languages' },
    
    // Web Technologies
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95, category: 'web' },
    { name: 'CSS3', icon: <FaCss3 />, color: '#1572B6', level: 92, category: 'web' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 60, category: 'web' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933', level: 68, category: 'web' },
    { name: 'Express', icon: <SiExpress />, color: '#FFFFFF', level: 45, category: 'web' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 40, category: 'web' },
    
    // Databases
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 63, category: 'database' },
    { name: 'SQL', icon: <FaDatabase />, color: '#4479A1', level: 85, category: 'database' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', level: 50, category: 'database' },
    
    // Other Skills
    { name: 'Machine Learning', icon: <FaBrain />, color: '#FF6B6B', level: 45, category: 'tech' },
    { name: 'Leadership & Communication', icon: <FaUsers />, color: '#FFD700', level: 92, category: 'soft' },
    // { name: 'Communication', icon: <FaUsers />, color: '#FFA500', level: 90, category: 'soft' },
    { name: 'Vibe Coding/ Debugging', icon: <FaBug />, color: '#DC143C', level: 85, category: 'soft' },
  ];

  const tools = [
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
    { name: 'Notion', icon: <SiNotion />, color: '#FFFFFF' },
    { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
    { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
    { name: 'Kaggle', icon: <SiKaggle />, color: '#20BEFF' },
    { name: 'Ollama', icon: <FaBrain />, color: '#9B59B6' },
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

        <motion.h3
          className="tools-title"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className="terminal-bracket">{'['}</span> Tools & Software{' '}
          <span className="terminal-bracket">{']'}</span>
        </motion.h3>

        <motion.div
          className="tools-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              className="tool-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="tool-icon" style={{ color: tool.color }}>
                {tool.icon}
              </div>
              <span className="tool-name">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-description"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>
            Constantly learning and adapting to new technologies to deliver cutting-edge solutions.
            {/* My expertise spans across programming languages, full-stack development, ML, and effective collaboration. */}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
