import React, { useState } from 'react';
import { MenuContainer, Hamburger, MenuList, MenuItem } from './styles';

export function MenuHamburgerHeader({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <MenuContainer>
      <Hamburger $isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>
      {isOpen && (
        <MenuList>
          {options.map((option, index) => (
            <MenuItem
              key={index}
              $isOpen={isOpen}
              $delay={index * 0.1}
              onClick={() => handleOptionClick(option.id)}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </MenuContainer>
  );
}
