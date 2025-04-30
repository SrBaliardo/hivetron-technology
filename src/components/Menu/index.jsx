import React from 'react';
import { Container, MenuItens, MenuLink } from './styles';
import { ShinyText } from '../../components';
import { tagsMenu } from './tags-menu';

export function Menu() {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Container>
      <MenuItens>
        {tagsMenu.map((item) => {
          const isActive = location.pathname === item.link;
          const isContact = item.label === 'CONTATO';

          return (
            <MenuLink
              key={item.id}
              $isContact={isContact}
              onClick={() => handleClick(item.id)}
            >
              {item.label === 'CONTATO' ? (
                <ShinyText
                  text="CONTATO"
                  disabled={false}
                  speed={3.5}
                  className="custom-class menu-link"
                />
              ) : (
                item.label
              )}
            </MenuLink>
          );
        })}
      </MenuItens>
    </Container>
  );
}
