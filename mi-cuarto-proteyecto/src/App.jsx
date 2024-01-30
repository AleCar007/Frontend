import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [gifs, setGifs] = useState([]) // Listas de Gifs
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  // Las llamadas a API normalmente se hacen en el useEffect
  // Usaremos useEffect con un arreglo de depndencias vacío para que se ejecute solo una vez

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)
      .then(response => response.json())
      .then(results => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }, []

  )

  return (
    <>
      <h1>Giphy App</h1>
    </>
  )
}

export default App
