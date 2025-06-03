import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  max-width: 1100px;
  padding: 100px 0;
  margin: 0 auto;

  h2 {
    font-size: clamp(26px, 5vw, 32px);
    color: ${({ theme }) => theme.colors.lightestSlate};
    font-weight: 600;
    margin-bottom: 30px;
    font-family: ${({ theme }) => theme.fonts.sans};

    &::before {
      content: '02.';
      margin-right: 10px;
      color: ${({ theme }) => theme.colors.green};
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 20px;
    }
  }

  .edu-block {
    background-color: ${({ theme }) => theme.colors.lightNavy};
    border-left: 2px solid ${({ theme }) => theme.colors.green};
    padding: 25px 30px;
    border-radius: 4px;
    margin-bottom: 40px;
    box-shadow: 0 4px 10px rgba(2, 12, 27, 0.2);

    h3 {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.lightestSlate};
      margin-bottom: 5px;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.slate};
      font-family: ${({ theme }) => theme.fonts.mono};
      display: block;
      margin-bottom: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.lightSlate};

      li {
        margin-bottom: 8px;
      }

      strong {
        color: ${({ theme }) => theme.colors.green};
        font-family: ${({ theme }) => theme.fonts.mono};
      }
    }
  }
`;

// Animation variants for different effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Education = () => {
  return (
    <EducationSection id="education">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Education
      </motion.h2>

      {/* Option 1: Simple slide-up animation */}
      <motion.div
        className="edu-block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          University of California, Irvine
        </motion.h3>

        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          B.S. in Software Engineering · 2022–2025
        </motion.span>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.li variants={itemVariants}>
            <strong>Coursework:</strong> Data Structures & Algorithms, Computer Networks, Machine Learning & Data Mining,
              Neural Networks & Deep Learning, Project Management, Web Accessibility, Programming in (Python, Java, C++, C#)
          </motion.li>
          <motion.li variants={itemVariants}>
            <strong>Awards:</strong> Dean's Honor List, Regents Scholar, 2nd Place @ ICS Expo 2025
          </motion.li>
        </motion.ul>
      </motion.div>
    </EducationSection>
  );
};

export default Education;