import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import axios from "axios";


import { toast } from "react-toastify";




const ProductContainer = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const Button = styled.button`
  background-color: #d47b7b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #b66565;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    axios
      .get("https://6876beb1dba809d901ed00a6.mockapi.io/api-1/products")
      .then((res) => {
        setProducts(res.data);
        setCurrentPage(1);
      })
      .catch((err) => console.error("Error al cargar productos", err));
  }, []);

  const handleAddToCart = (product) => {
  
    addToCart(product);
    toast.success(`✅ ${product.name} agregado al carrito`);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginBottom: "1rem" }}
      />

      <ProductContainer>
        {paginated.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <strong>${product.price}</strong>
            </p>
            <Button onClick={() => handleAddToCart(product)}>Agregar al carrito</Button>
          </ProductCard>
        ))}
      </ProductContainer>

      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </Button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Products;