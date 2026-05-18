import React, { useState } from 'react';
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
  FaBrain,
  FaUsers,
  FaBug,
  FaJava,
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
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas
} from 'react-icons/si';
import SkillSphere from './SkillSphere';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [viewMode, setViewMode] = useState('sphere'); // 'sphere' | 'categories'

  const allItems = [
    // Programming Languages
    { name: 'C', icon: <SiC />, color: '#A8B9CC', category: 'Languages' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C', category: 'Languages' },
    { name: 'Java', icon: <FaJava />, color: '#007396', category: 'Languages' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', category: 'Languages' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'Languages' },
    
    // Web Technologies
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', category: 'Web Development' },
    { name: 'CSS3', icon: <FaCss3 />, color: '#1572B6', category: 'Web Development' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'Web Development' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933', category: 'Web Development' },
    { name: 'Express', icon: <SiExpress />, color: '#FFFFFF', category: 'Web Development' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', category: 'Web Development' },
    
    // Databases
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', category: 'Databases' },
    { name: 'SQL', icon: <FaDatabase />, color: '#4479A1', category: 'Databases' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', category: 'Databases' },
    
    // AI/ML & New requested skills
    { name: 'Machine Learning', icon: <FaBrain />, color: '#FF6B6B', category: 'AI & ML' },
    { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8', category: 'AI & ML' },
    { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C', category: 'AI & ML' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00', category: 'AI & ML' },
    { name: 'Hugging Face', icon: <span>🤗</span>, color: '#FFD21E', category: 'AI & ML' },
    { name: 'NumPy', icon: <SiNumpy />, color: '#013243', category: 'AI & ML' },
    { name: 'pandas', icon: <SiPandas />, color: '#150458', category: 'AI & ML' },

    // Soft Skills
    { name: 'Leadership & Comm', icon: <FaUsers />, color: '#FFD700', category: 'Soft Skills' },
    { name: 'Debugging', icon: <FaBug />, color: '#DC143C', category: 'Soft Skills' },

    // Tools
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC', category: 'Tools & Software' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', category: 'Tools & Software' },
    { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF', category: 'Tools & Software' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', category: 'Tools & Software' },
    { name: 'Canva', icon: <SiCanva />, color: '#00C4CC', category: 'Tools & Software' },
    { name: 'Notion', icon: <SiNotion />, color: '#FFFFFF', category: 'Tools & Software' },
    { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF', category: 'Tools & Software' },
    { name: 'Render', icon: <SiRender />, color: '#46E3B7', category: 'Tools & Software' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624', category: 'Tools & Software' },
    { name: 'Kaggle', icon: <SiKaggle />, color: '#20BEFF', category: 'Tools & Software' }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Skills <span className="title-break">&</span> Technologies
          {inView && <span className="typed-text">Skills & Technologies</span>}
        </motion.h2>

        <motion.div
          className="skills-toggle-container"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            className="skills-toggle-btn"
            onClick={() => setViewMode(viewMode === 'sphere' ? 'categories' : 'sphere')}
          >
            {viewMode === 'sphere' ? 'Categorise Skills' : 'Back to Sphere'}
          </button>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <SkillSphere items={allItems} viewMode={viewMode} />
        </motion.div>

        <motion.div
          className="skills-description"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>
            Constantly learning and adapting to new technologies to deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
