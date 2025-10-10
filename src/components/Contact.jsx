import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 100px 0;
  text-align: center;

  .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(26px, 5vw, 32px);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin-bottom: 20px;
    gap: 12px;

    span {
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.green};
      font-size: 20px;
    }
  }

  .email {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.slate};
    font-family: ${({ theme }) => theme.fonts.mono};
    margin-top: 16px;
    margin-bottom: 30px;
  }

  a.email-link {
    display: inline-block;
    padding: 1rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 14px;
    text-decoration: none;
    border-radius: 4px;
    transition: 0.3s ease;

    &:hover {
      background-color: rgba(100, 255, 218, 0.1);
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.green};
    }
  }
`;

const Contact = () => {
  return (
      <ContactSection id="contact">
          <motion.div
              className="section-title"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
          >
              <span>05.</span> Contact Me
          </motion.div>

          <motion.div
              className="email"
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.1}}
          >
              I'm currently searching for career opportunities in Q/A and software engineering. Feel free to email me below or
              add me on LinkedIn!
          </motion.div>

          <motion.a
              href="mailto:stevengorlicki@hotmail.com"
              className="email-link"
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.2}}
          >
              stevengorlicki@hotmail.com
          </motion.a>

      </ContactSection>
  );
};

export default Contact;
