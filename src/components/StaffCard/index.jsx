import React from 'react';
import { Container, Card, Title, Avatar, Socials, Text } from './styles';
import { listStaff } from './listStaff';

export function StaffCard() {
  return (
    <Container>
      {listStaff.map((item) => {
        return (
          <Card key={item.id}>
            <Title>{item.name}</Title>
            <Avatar src={item.avatar} alt="developer-image" />
            <Socials>
              <a
                className="devicon-github-original icon"
                href={item.github}
                target="_blank"
              ></a>
              <a
                className="devicon-linkedin-plain icon"
                href={item.linkedin}
                target="_blank"
              ></a>
            </Socials>
            <Text>{item.description}</Text>
          </Card>
        );
      })}
    </Container>
  );
}
