import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Ahora mismo hemos cerrado, tal vez</h1>
      <p>No hemos podido cargar los datos</p>
      {error && <pre>{error.message}</pre>}
    </div>
  );
}

export default ErrorPage;
