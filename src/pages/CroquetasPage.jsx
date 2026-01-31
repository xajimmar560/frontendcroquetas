import { useEffect, useState } from 'react';
import { getAllCroquetas } from '../services/croquetaService';
import { deleteCroqueta } from '../services/croquetaService';


function CroquetasPage() {
  const [croquetas, setCroquetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllCroquetas()
      .then(res => {
        setCroquetas(res.data.datos);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando croquetas...</p>;
  if (error) return <p>Ha habido un error en la cocina</p>;

  return (
    <div>
      <h2>Listado de croquetas disponibles</h2>
      <ul>
        <ul>
  {croquetas.map(c => (
    <li key={c.nombre}>
      {c.nombre} – {c.precio} €
      <div>
      <button onClick={() =>  deleteCroqueta(c.nombre)}>
        ❌Borrar croquetilla 😔
      </button>
      </div>
    </li>
  ))}
</ul>

        
      </ul>
    </div>
  );
}

export default CroquetasPage;
