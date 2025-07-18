import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";


const MainContent = styled.main`
  margin-top: 300px; /* Ajusta según la altura de tu navbar */
  padding: 1rem;
`;

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <ToastContainer />
          
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/reseñas" element={<Reviews />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />

              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </MainContent>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;