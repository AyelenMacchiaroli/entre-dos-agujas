import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <h1>Sobre Nosotros</h1>
      <p>
        En <strong>Entre Dos Agujas</strong> creemos que cada prenda tejida tiene una historia.  
        Somos una tienda artesanal de tejidos hecha con amor, creatividad y tradición familiar.
      </p>
      <p>
        Nuestra misión es abrigarte el cuerpo y el alma con diseños únicos, hechos a mano, pensados
        para durar y transmitir calidez.
      </p>
    </AboutContainer>
  );
};

export default AboutUs;
