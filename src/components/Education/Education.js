import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2016 - 2020',
      gpa: '3.8/4.0',
      highlights: [
        'Major in Software Engineering',
        'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems',
        'Dean\'s List for 6 semesters',
      ],
    },
    {
      id: 2,
      degree: 'Certifications',
      institution: 'Various Platforms',
      location: 'Online',
      period: '2020 - Present',
      highlights: [
        'AWS Certified Developer - Associate',
        'Meta Frontend Developer Professional Certificate',
        'Full Stack Web Development Bootcamp',
      ],
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Education
          {inView && <span className="typed-text">Education</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="education-list"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              className="education-item glass-card"
              variants={itemVariants}
              whileHover={{ x: -10 }}
            >
              <div className="education-header">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-title-section">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution">{edu.institution}</h4>
                </div>
              </div>
              <div className="education-meta">
                <div className="education-period">
                  <FaCalendar /> {edu.period}
                </div>
                <div className="education-location">
                  <FaMapMarkerAlt /> {edu.location}
                </div>
              </div>
              {edu.gpa && (
                <div className="education-gpa">GPA: {edu.gpa}</div>
              )}
              <ul className="education-highlights">
                {edu.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
