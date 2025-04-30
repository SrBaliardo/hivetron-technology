import React from 'react';
import { Container, CustomCarousel, Content } from './styles';
import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.png';
import slide4 from '../../assets/images/slide4.png';

export function Carousel() {
  return (
    <Container>
      <CustomCarousel autoplay autoplaySpeed={7000}>
        <Content>
          <div>
            <h2>Desenvolvimento de Software Personalizado</h2>
            <img src={slide1} alt="garoto-olhando-codigo" />
            <p>
              Criamos soluções sob medida para o seu negócio, garantindo que
              cada sistema seja projetado para atender às suas demandas
              específicas. Do planejamento à entrega, desenvolvemos aplicações
              robustas e escaláveis que impulsionam a sua empresa.
            </p>
          </div>
        </Content>
        <Content>
          <div>
            <h2>Implantação de Sistemas de Automação</h2>
            <img src={slide2} alt="contato-mão-robotica-e-humana" />
            <p>
              Otimize processos, reduza custos e aumente a eficiência com nossas
              soluções de automação. Integramos e configuramos sistemas que
              facilitam o gerenciamento e potencializam os resultados da sua
              operação.
            </p>
          </div>
        </Content>
        <Content>
          <div>
            <h2>Design e Otimização de Sites e Landing Pages</h2>
            <img src={slide3} alt="laptop-na-mesa" />
            <p>
              Destaque sua presença online com sites e landing pages modernos,
              funcionais e otimizados para conversão. Nosso time combina design
              criativo com as melhores práticas de SEO para garantir que sua
              marca tenha impacto na web.
            </p>
          </div>
        </Content>
        <Content>
          <div>
            <h2>Consultoria em Transformação Digital</h2>
            <img src={slide4} alt="-celular-com-hello-na-tela" />
            <p>
              Prepare sua empresa para o futuro com nossas consultorias
              estratégicas. Ajudamos você a implementar as melhores tecnologias
              e práticas para digitalizar processos, modernizar operações e
              alcançar novos níveis de produtividade.
            </p>
          </div>
        </Content>
      </CustomCarousel>
    </Container>
  );
}
