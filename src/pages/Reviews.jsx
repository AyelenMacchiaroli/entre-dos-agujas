import React from "react";
import styled from "styled-components";

const ReviewsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Review = styled.div`
  margin: 1rem auto;
  max-width: 600px;
  border-left: 4px solid #d47b7b;
  padding-left: 1rem;
  font-style: italic;
`;

const Reviews = () => {
  return (
    <ReviewsContainer>
      <h1>Reseñas de nuestros clientes</h1>
      <Review>
        “Hermosos tejidos, excelente calidad. ¡Volveré a comprar!”
      </Review>
      <Review>
        “La atención fue muy cálida y personalizada. Gracias 💕”
      </Review>
      <Review>
        “Compré un regalo y llegó perfecto. ¡Súper recomendable!”
      </Review>
    </ReviewsContainer>
  );
};

export default Reviews;
