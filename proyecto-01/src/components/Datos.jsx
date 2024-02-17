import React, { useState, useEffect } from 'react';
//Cremamos una función tersaria para crear los datos
const Datos = () => {
  const [datos, setDatos] = useState([]); // con este en datos son los datos que vamos a agregar
  const [busqueda, setBusqueda] = useState('');//En este el conjunto es vacio para ir rellenando la busqueda

  useEffect(() => {
    const obtenerDatosDeAPI = async () => { //funcion para obtener los datos de la API
      try {
        const respuesta = await fetch('https://api.github.com/repos/facebook/react/issues'); //aqui ponemos el link de la API
        const datosAPI = await respuesta.json(); // Los convertimos en un JSON
        setDatos(datosAPI); //Los agregamos al arreglo
      } catch (error) { //Control de errores
        console.error('Error al obtener datos de la API', error);
      }
    };

    obtenerDatosDeAPI();
  }, []); // El segundo argumento vacío indica que el efecto se ejecuta solo una vez al montar el componente

  // Filtrar datos según la búsqueda
  const datosFiltrados = datos.filter(item =>
    item.title.toLowerCase().includes(busqueda.toLowerCase()) || //Para buscar por nombre
    String(item.id).includes(busqueda) || //Para buscar por id
    item.url.toLowerCase().includes(busqueda.toLowerCase()) //Para buscar por URL
  );
// Aqui ira el DOM que se integrara al HTML
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />
      <ul> 
        {datosFiltrados.map(item => (
          <li key={item.id}>
            Nombre: {item.nombre}, ID: {item.id}, URL: {item.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Datos;