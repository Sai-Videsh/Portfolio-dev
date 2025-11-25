import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendar, FaCertificate } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      id: 1,
      title: 'Technical Lead',
      company: 'Airath Innovations Pvt. Ltd.',
      period: 'Sep 2025 - Present',
      description: [
        'Researched 7+ competitor platforms, benchmarking product flow, UI systems, and market gaps.',
        'Designed and built the complete landing page and dashboard layouts(in progress) with one teammate, covering 15+ core screens.',
],
      certificate: `https://drive.google.com/file/d/${process.env.REACT_APP_CERT_EXPERIENCE_1}/view`,
    },
    {
      id: 2,
      title: 'Products and Operations Intern',
      company: 'Sarvagya Nirakar',
      period: 'Apr 2024 - Sep 2024',
      description: [
        'Led cross-functional team of 8+ contributors as Product Manager and Developer; delivered 2 functionality modules and 2 UI wireframes for the project \'VAKYA SANGHAM - A Regional Language App\'.',
        'Directed HR & Public Executive operations by coordinating 10+ community interactions, managing 2 recruitment cycles, Creating 3+ project pitch decks and supporting outreach that increased engagement by 23%.',
      ],
      certificate: `https://drive.google.com/file/d/${process.env.REACT_APP_CERT_EXPERIENCE_2}/view`,
    },
    {
      id: 3,
      title: 'AI & Cloud Technologies Virtual Internship by IBM SkillsBuild ',
      company: 'Edunet Foundation, AICTE approved',
      period: 'May 2025 - June 2025',
      description: [
        'Delivered all required modules and project milestones (5+ total), maintaining 100% completion accuracy across the internship timeline.',
'Built SKILLITH, an end to end AI-powered Learning Path Recommender that guides students with practical roadmaps and skill based progression (1 week timeline).'
 ],
      certificate: `https://drive.google.com/file/d/${process.env.REACT_APP_CERT_EXPERIENCE_3}/view`,
    },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Experience
          {inView && <span className="typed-text">Experience</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item glass-card"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
              </div>
              <div className="experience-period">
                <FaCalendar /> {exp.period}
              </div>
              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {exp.certificate && (
                <motion.a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCertificate /> View Certificate
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
