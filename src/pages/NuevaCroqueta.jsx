import { useState } from 'react';
import { createCroqueta } from '../services/croquetaService';
import { useNavigate } from 'react-router-dom';

function NuevaCroqueta() {
  const [form, setForm] = useState({
    nombre: '',
    precio: '',
    creacion: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createCroqueta(form)
      .then(() => {
        navigate('/croquetas');
      })
      .catch(() => {
        setError('Error al crear la croqueta');
      });
  };

  return (
    <div>
      <h2>Nueva croqueta</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label><br />
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Precio (€)</label><br />
          <input
            type="number"
            step="0.01"
            name="precio"
            value={form.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Fecha de creación</label><br />
          <input
            type="date"
            name="creacion"
            value={form.creacion}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default NuevaCroqueta;
