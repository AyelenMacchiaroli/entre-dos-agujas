import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext"; // ✅ Importa el AuthContext

const Nav = styled.nav`
  background: #fceeee;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Logo = styled(Link)`
  font-size: 1.6rem;
  color: #b66565;
  font-family: 'Segoe UI', sans-serif;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a, button {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s;
    font-family: inherit;

    &:hover {
      color: #d47b7b;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const Navbar = () => {
  const { user, logout } = useAuth(); // ✅ Obtenemos el user y logout del contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirige al home después del logout
  };

  return (
    <Nav role="navigation" aria-label="Barra de navegación principal">
      <Logo to="/">Entre Dos Agujas</Logo>
      <NavLinks>
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/cart">Carrito</Link>
        {!user && <Link to="/login">Login</Link>}
        <Link to="/contacto">Contacto</Link>
        <Link to="/reseñas">Reseñas</Link>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        {user && (
          <button onClick={handleLogout} aria-label="Cerrar sesión">
            Logout
          </button>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
