import React, { useState } from 'react';
import {
  Container,
  ContainerContent,
  FaceSection,
  AboutSection,
  ServicesSection,
  Intersection,
  DevsSection,
  TechsSection,
  ProjectsSection,
  ContactSection,
  ServiceIcon,
  DevsIcon,
  TechsIcon,
  ProjIcon,
  CttIcon,
  HeaderSection,
  Title,
  Text,
} from './styles';
import {
  Header,
  Carousel,
  StaffCard,
  Projects,
  Footer,
  MenuHamburgerBody,
  FollowCursor,
} from '../../components';
import { useInView } from '../../utils/useInView';
import {
  WhatsAppOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import faceImg from '../../assets/images/facesection-bg-2.png';
import aboutImg from '../../assets/images/tech-img.png';
import intersectionFooterBg from '../../assets/images/background-footer.png';
import teamBee from '../../assets/images/hivetronBeees.png';

export function Home() {
  const [currentTech, setCurrentTech] = useState('');
  const [aboutRef, aboutVisible] = useInView();
  const [servicesRef, servicesVisible] = useInView();
  const [devsRef, devsVisible] = useInView();
  const [techsRef, techsVisible] = useInView();
  const [projectsRef, projectsVisible] = useInView();
  const [contactRef, contactVisible] = useInView();

  const technologies = [
    { id: 1, icon: 'devicon-java-plain', description: 'Java' },
    { id: 2, icon: 'devicon-spring-original', description: 'Spring' },
    { id: 3, icon: 'devicon-docker-plain', description: 'Docker' },
    { id: 6, icon: 'devicon-react-original', description: 'React' },
    { id: 4, icon: 'devicon-javascript-plain', description: 'JavaScript' },
    { id: 5, icon: 'devicon-typescript-plain', description: 'TypeScript' },
    { id: 7, icon: 'devicon-html5-plain', description: 'HTML' },
    { id: 8, icon: 'devicon-css3-plain', description: 'CSS' },

    /*
    devicon-mysql-original
    devicon-swagger-plain
    devicon-tailwindcss-original
    devicon-bootstrap-plain
    devicon-materialui-plain
    devicon-antdesign-plain
    devicon-figma-plain
    devicon-git-plain
    devicon-github-original
    */
  ];

  const menuOptions = [
    { label: 'Voltar ao topo', id: 'top' },
    { label: 'Sobre', id: 'about-section' },
    { label: 'Serviços', id: 'services-section' },
    { label: 'Devs', id: 'devs-section' },
    { label: 'Tecnologias', id: 'techs-section' },
    { label: 'Projetos', id: 'projects-section' },
    { label: 'Contato', id: 'contact-section' },
  ];

  return (
    <Container>
      <Header />
      <ContainerContent id="top">
        <FaceSection>
          <img src={faceImg} alt="hivetron-technology" />
        </FaceSection>

        <MenuHamburgerBody options={menuOptions} />

        <FollowCursor
          offsetX={20}
          cardWidth="200px"
          rotationFactor={40}
          enableTilt={true}
          animationConfig={{ mass: 5, tension: 350, friction: 40 }}
          wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
        ></FollowCursor>

        <AboutSection
          id="about-section"
          ref={aboutRef}
          className={aboutVisible ? 'visible' : ''}
        >
          <div className="sect">
            <img src={aboutImg} alt="hivetron-technology" />
            <div>
              <Text>
                Somos uma rede dinâmica de desenvolvedores especializados,
                unidos para transformar ideias em soluções personalizadas e
                inovadoras.
              </Text>
              <Text>
                Nosso objetivo é simplificar a complexidade do desenvolvimento
                de software, oferecendo projetos sob medida para atender às
                necessidades únicas de cada cliente. <br />
                Com uma equipe diversificada de especialistas, garantimos
                soluções que são tanto funcionais quanto escaláveis.
              </Text>
              <Text>
                Seja para startups que estão começando ou empresas consolidadas
                que buscam inovação, a Hivetron está aqui para construir,
                conectar e entregar.
              </Text>
            </div>
          </div>
        </AboutSection>

        <ServicesSection
          id="services-section"
          ref={servicesRef}
          className={servicesVisible ? 'visible' : ''}
        >
          <HeaderSection>
            <div className="div-T">
              <ServiceIcon />
              <Title>Serviços</Title>
            </div>
            <Text className="div-T">
              Na Hivetron, transformamos desafios em soluções tecnológicas.
              Oferecemos uma gama de serviços personalizados para atender às
              necessidades específicas de cada cliente. Conheça o que podemos
              fazer por você:
            </Text>
          </HeaderSection>
          <Carousel />
        </ServicesSection>

        <DevsSection id="devs-section">
          <section ref={devsRef} className={devsVisible ? 'visible' : ''}>
            <HeaderSection>
              <div className="div-T">
                <DevsIcon />
                <Title>Desenvolvedores</Title>
              </div>
            </HeaderSection>
            <StaffCard />
          </section>
        </DevsSection>

        <TechsSection
          id="techs-section"
          ref={techsRef}
          className={techsVisible ? 'visible' : ''}
        >
          <HeaderSection>
            <div className="div-T">
              <TechsIcon />
              <Title>Tecnologias</Title>
            </div>
            <div className="principal-techs div-T">
              {technologies.map((tech) => (
                <label key={tech.id}>
                  <i
                    className={`${tech.icon} icon`}
                    onMouseEnter={() => setCurrentTech(tech.description)}
                    onMouseLeave={() => setCurrentTech('')}
                  ></i>
                </label>
              ))}
            </div>
            <Text className="icon-description">{currentTech}</Text>
          </HeaderSection>
          <img className="teamBee" src={teamBee} />
        </TechsSection>

        <ProjectsSection id="projects-section">
          <section
            ref={projectsRef}
            className={projectsVisible ? 'visible' : ''}
          >
            <HeaderSection>
              <div className="div-T">
                <ProjIcon />
                <Title className="title">Projetos</Title>
              </div>
              <Text></Text>
            </HeaderSection>
            <Projects />
          </section>
        </ProjectsSection>

        <Intersection>
          <img src={intersectionFooterBg} />
        </Intersection>

        <ContactSection id="contact-section">
          <section
            className={`${contactVisible ? 'visible' : ''}`}
            ref={contactRef}
          >
            <HeaderSection>
              <div className="div-T">
                <CttIcon />
                <Title>Contato</Title>
              </div>
              <div className="contacts">
                <a href="mailto:hivetron.dev@gmail.com" target="_blank">
                  <MailOutlined />
                  <label>hivetron.dev@gmail.com</label>
                </a>
                <a href="https://wa.me/5516988455588?text=" target="_blank">
                  <WhatsAppOutlined />
                  <label>Whatsapp</label>
                </a>
                <a href="tel:16988455588" target="_blank">
                  <PhoneOutlined />
                  <label>Fale com a gente</label>
                </a>
              </div>
            </HeaderSection>
          </section>
        </ContactSection>
      </ContainerContent>
      <Footer />
    </Container>
  );
}
