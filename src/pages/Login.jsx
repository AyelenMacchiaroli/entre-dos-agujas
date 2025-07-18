import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const LoginContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background: #fff;
`;

const Title = styled.h2`
  text-align: center;
  color: #b66565;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #b66565;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #a15050;
  }
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (success) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/products");
      }
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <LoginContainer>
      <Title>Iniciar Sesión</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Ingresar</Button>
        {error && <ErrorText>{error}</ErrorText>}
      </form>
    </LoginContainer>
  );
};

export default Login;