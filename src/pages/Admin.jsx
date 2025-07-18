import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/ProductService";




const Admin = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
  setLoading(true);
  setError("");
  try {
    const data = await getAllProducts();
    setProducts(data);
  } catch (err) {
    setError("❌ Error al cargar productos. Intentalo más tarde.");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  
  if (form.name.trim().length < 3) {
    setError("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  if (!form.price || parseFloat(form.price) <= 0) {
    setError("El precio debe ser mayor a 0.");
    return;
  }

  if (!form.image.trim()) {
    setError("La URL de imagen es obligatoria.");
    return;
  }

  try {
    if (editingId) {
      await updateProduct(editingId, form);
    } else {
      await createProduct(form);
    }

    
    setForm({ name: "", price: "", image: "" });
    setEditingId(null);
    setError("");
    fetchProducts();
  } catch (err) {
    setError("Hubo un error al guardar el producto.");
  }
};



  const handleEdit = (product) => {
    setForm({ name: product.name, price: product.price, image: product.image });
    setEditingId(product.id);
  };

const handleDelete = async (id) => {
  const confirmDelete = window.confirm("¿Estás segura de eliminar este producto?");
  if (!confirmDelete) return;

  setLoading(true);
  setError("");
  try {
    await deleteProduct(id);
    await fetchProducts();
  } catch (err) {
    setError("❌ Error al eliminar el producto.");
  } finally {
    setLoading(false);
  }
};

  if (user?.role !== "admin") {
    return <p style={{ padding: "2rem" }}>⛔ No tenés permisos para ver esta sección.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Panel de Administración 🛠️</h2>

     
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de imagen"
          value={form.image}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
  {editingId ? "Actualizar" : "Agregar"}
</button>
      </form>

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>
                <img src={p.image} alt={p.name} width="60" />
              </td>
              <td>
                <button onClick={() => handleEdit(p)}>Editar</button>
                <button onClick={() => handleDelete(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
