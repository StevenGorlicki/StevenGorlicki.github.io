import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 15vw;
  max-width: 1200px;

  h1 {
    margin: 0 0 30px 4px;
    color: ${({ theme }) => theme.colors.green};
    font-size: clamp(14px, 5vw, 16px);
    font-family: ${({ theme }) => theme.fonts.mono};
    font-weight: 400;
    min-height: 1.2em; /* Prevents layout shift */
  }

  h2 {
    font-size: clamp(40px, 8vw, 80px);
    margin: 0;
    color: ${({ theme }) => theme.colors.lightestSlate};
    line-height: 1.1;
    font-weight: 600;
  }



  p {
    max-width: 540px;
    color: ${({ theme }) => theme.colors.slate};
    font-size: clamp(16px, 3vw, 20px);
    line-height: 1.5;
    margin: 20px 0 70px 0;

    a {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: none;
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: inherit;
      display: inline;
      padding: 0;
      border: none;
      background: none;

      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  a {
    color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.colors.green};
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    display: inline-block;

    &:hover,
    &:focus {
      background-color: rgba(100, 255, 218, 0.1);
      transform: translate(-4px, -4px);
      box-shadow: 4px 4px 0 0 ${({ theme }) => theme.colors.green};
    }

    &:active {
      transform: translate(-1px, -1px);
      box-shadow: 1px 1px 0 0 ${({ theme }) => theme.colors.green};
    }
  }

  @media (max-width: 768px) {
    padding: 0 25px;

    h2,
    h3 {
      margin: 0 0 10px 0;
    }
  }
`;

const TypewriterCursor = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.green};
  width: 2px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Hero = () => {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [isFirstComplete, setIsFirstComplete] = useState(false);
  const [isSecondComplete, setIsSecondComplete] = useState(false);
  const firstText = 'Hi, my name is';
  const secondText = 'Steven Gorlicki.';
  const typingSpeed = 80; // milliseconds per character

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < firstText.length) {
        setDisplayedText1(firstText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setIsFirstComplete(true);

          // Start typing second text
          let index2 = 0;
          const timer2 = setInterval(() => {
            if (index2 < secondText.length) {
              setDisplayedText2(secondText.slice(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);
              setTimeout(() => {
                setIsSecondComplete(true);
              }, 300);
            }
          }, typingSpeed);
        }, 200);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <HeroSection id="hero">
      <h1>
        {displayedText1}
        {!isFirstComplete && <TypewriterCursor />}
      </h1>

      <h2>
        {displayedText2}
        {isFirstComplete && !isSecondComplete && <TypewriterCursor />}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isSecondComplete ? 1 : 0,
          y: isSecondComplete ? 0 : 30
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        I'm a new grad software engineer passionate about game development, UI design, and AI.
        This summer, I'll be teaching Computer Science and Robotics to middle school students at{' '}
        <a
          href="https://www.idtech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          iDTech
        </a>
        .<br />
        I'm currently looking for job opportunities!
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isSecondComplete ? 1 : 0,
          y: isSecondComplete ? 0 : 30
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        Get In Touch
      </motion.a>
    </HeroSection>
  );
};

export default Hero;