// src/components/SocialsBar.jsx
import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Sidebar = styled.div`
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin-top: 20px;
      background-color: ${({ theme }) => theme.colors.green};
    }

    li a {
      color: ${({ theme }) => theme.colors.slate};
      transition: all 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.green};
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const SocialsBar = () => {
  return (
    <Sidebar>
      <ul>
        <li>
          <a href="https://github.com/stevengorlicki" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/steven-gorlicki" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </Sidebar>
  );
};

export default SocialsBar;
