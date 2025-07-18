import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import { FaTrash, FaBroom } from "react-icons/fa";

const CartContainer = styled.div`
  padding: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff8f8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const RemoveButton = styled.button`
  background-color: #d47b7b;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background-color: #b66565;
  }
`;

const ClearButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #555;
  }
`;

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container my-4">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className="row">
            {cart.map((product, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <ProductCard>
                  <h4>{product.name}</h4>
                  <p>Precio: ${product.price}</p>
                  <RemoveButton
                    onClick={() => removeFromCart(product.id)}
                    aria-label={`Eliminar ${product.name} del carrito`}
                  >
                    <FaTrash /> Eliminar
                  </RemoveButton>
                </ProductCard>
              </div>
            ))}
          </div>

          <ClearButton
            onClick={clearCart}
            aria-label="Vaciar todos los productos del carrito"
          >
            <FaBroom /> Vaciar Carrito
          </ClearButton>
        </>
      )}
    </div>
  );
};

export default Cart;
