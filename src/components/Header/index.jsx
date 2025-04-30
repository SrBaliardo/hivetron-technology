import React, { useState, useEffect } from 'react';
import { Container, Logo } from './styles';
import { Menu, MenuHamburgerHeader } from '../../components';
import logoHivetron from '../../assets/images/logo-hivetron.png';

export function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 465);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 465);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuOptions = [
    { label: 'Sobre', id: 'about-section' },
    { label: 'Serviços', id: 'services-section' },
    { label: 'Devs', id: 'devs-section' },
    { label: 'Tecnologias', id: 'techs-section' },
    { label: 'Projetos', id: 'projects-section' },
    { label: 'Contato', id: 'contact-section' },
  ];

  return (
    <Container>
      <Logo src={logoHivetron} alt="logo-hivetron" />
      {isMobile ? (
        <label>
          {' '}
          Menu
          <MenuHamburgerHeader options={menuOptions} />
        </label>
      ) : (
        <Menu />
      )}
    </Container>
  );
}
