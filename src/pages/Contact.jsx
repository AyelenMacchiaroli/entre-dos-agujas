import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #d47b7b;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Helmet>
        <title>Contacto | Entre Dos Agujas</title>
      </Helmet>
      <Paragraph>¿Querés consultarnos algo?</Paragraph>
      <Paragraph>
        <MdEmail /> entre2agujas@gmail.com
      </Paragraph>
      <Paragraph>
        <MdLocationOn /> Buenos Aires, Argentina
      </Paragraph>
      <Paragraph>
        <MdWhatsapp /> +54 9 11 21212121
      </Paragraph>
    </ContactContainer>
  );
};

export default Contact;
