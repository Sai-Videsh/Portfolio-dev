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

  const allItems = [
    // Programming Languages
    { name: 'C', icon: <SiC />, color: '#A8B9CC' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    
    // Web Technologies
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3 />, color: '#1572B6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    
    // Databases
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    
    // AI/ML & New requested skills
    { name: 'Machine Learning', icon: <FaBrain />, color: '#FF6B6B' },
    { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8' },
    { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
    { name: 'Hugging Face', icon: <span>🤗</span>, color: '#FFD21E' },
    { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
    { name: 'pandas', icon: <SiPandas />, color: '#150458' },

    // Soft Skills
    { name: 'Leadership & Comm', icon: <FaUsers />, color: '#FFD700' },
    { name: 'Debugging', icon: <FaBug />, color: '#DC143C' },

    // Tools
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Canva', icon: <SiCanva />, color: '#00C4CC' },
    { name: 'Notion', icon: <SiNotion />, color: '#FFFFFF' },
    { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
    { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
    { name: 'Kaggle', icon: <SiKaggle />, color: '#20BEFF' }
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
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <SkillSphere items={allItems} />
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
