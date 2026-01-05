import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: process.env.REACT_APP_EMAIL,
      link: `mailto:${process.env.REACT_APP_EMAIL}`,
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: process.env.REACT_APP_PHONE,
      link: `tel:${process.env.REACT_APP_PHONE?.replace(/\s/g, '') || ''}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: process.env.REACT_APP_LOCATION,
      link: 'https://www.google.com/maps/place/Vidhyaranyapura,+Bengaluru,+Karnataka,+India',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2
          className={`section-title ${inView ? 'typewriter' : ''}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          Get In Touch
          {inView && <span className="typed-text">Get In Touch</span>}
        </motion.h2>

        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="contact-intro glass-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="gradient-text">Let's Work Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>
          </motion.div>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === 'Location' ? '_blank' : undefined}
                rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                className="contact-item glass-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-text">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>&copy; 2025 Sai Videsh. All rights reserved.</p>
          <p className="gradient-text">Built with curiosity and caffeine</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
