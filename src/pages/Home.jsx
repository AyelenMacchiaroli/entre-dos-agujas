import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import portadaImg from "../assets/portada.jpg";
import logoImg from "../assets/logo.png";       

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const Logo = styled.img`
  width: 180px;
  margin-bottom: 1rem;
`;

const Portada = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  margin: 1rem 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;

const Title = styled.h1`
  color: #d47b7b;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const Redes = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 2rem;

  a {
    color: #b66565;
    transition: 0.3s;

    &:hover {
      color: #f29ca3;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #888;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Helmet>
        <title>Entre Dos Agujas | Tejidos Artesanales</title>
        <meta name="description" content="Tienda de tejidos hechos con amor, diseño y dedicación." />
      </Helmet>

      <Logo src={logoImg} alt="Logo Entre Dos Agujas" />

      <Title>Entre Dos Agujas</Title>
      <Subtitle>Tejidos artesanales hechos con amor y dedicación. Cada prenda cuenta una historia.</Subtitle>

      <a href="/products">Ver productos</a>

      <Portada src={portadaImg} alt="Portada Entre Dos Agujas" />

      <Redes>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        <a href="https://wa.me/549XXXXXXXXX" target="_blank"><FaWhatsapp /></a>
      </Redes>

      <Footer>
        <p>Ubicación: Córdoba, Argentina | Contacto: entre2agujas@gmail.com</p>
        <p>© 2025 Entre Dos Agujas. Todos los derechos reservados.</p>
      </Footer>
    </HomeContainer>
  );
};

export default Home;
