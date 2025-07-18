// src/api.js
const BASE_URL = "https://6876beb1dba809d901ed00a6.mockapi.io/api-1/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};
