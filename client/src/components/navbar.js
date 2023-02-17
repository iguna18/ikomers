import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#">My Logo</Logo>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
      </MenuIcon>
      <MenuLinks isOpen={isOpen}>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </MenuLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: ${props => props.isOpen ? '200px' : '70px'};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: ${props => props.isOpen ? '120px' : '0'};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;
  }
`;

const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #f2f2f2;
  }

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export default Navbar;