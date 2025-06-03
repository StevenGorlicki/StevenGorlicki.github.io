import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 30px 0;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.lightSlate};
  background-color: ${({ theme }) => theme.colors.navy};

  a {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 4px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Created by Steven Gorlicki</p>
      <p>
        Design inspired by <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
