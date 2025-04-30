import React, { useState } from 'react';
import {
  Container,
  LeftContainer,
  RightContainer,
  MWContainer,
  MWTop,
  Card,
  RowCard,
  Title,
  Avatar,
  Socials,
  Text,
} from './styles';
import { listProjects } from './listProjects';
import RoboticBee from '../../assets/images/flying-robotic-bee-unscreen.gif';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(listProjects[0]);

  const handleSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <Container>
      <LeftContainer>
        {listProjects.map((project) => {
          return (
            <RowCard key={project.id} onClick={() => handleSelect(project)}>
              <div>
                <Title>{project.title}</Title>
                <Text>{project.shortDescription}</Text>
              </div>
            </RowCard>
          );
        })}
      </LeftContainer>

      <RightContainer>
        {selectedProject ? (
          <Card>
            <Title>{selectedProject.title}</Title>
            <Avatar className="cover" src={selectedProject.cover} />
            <Text>{selectedProject.description}</Text>
            <Socials>{selectedProject.details}</Socials>
          </Card>
        ) : (
          <Card>
            <Title>Select a Project</Title>
            <Text>Click on a project to see its details.</Text>
          </Card>
        )}
      </RightContainer>

      <MWContainer>
        {listProjects.map((project) => {
          return (
            <RowCard key={project.id} onClick={() => handleSelect(project)}>
              <MWTop>
                <Avatar className="cover" src={project.cover} />
                <Title>{project.title}</Title>
              </MWTop>
              <Text>{project.shortDescription}</Text>
            </RowCard>
          );
        })}
      </MWContainer>
    </Container>
  );
}
