import './App.css'
import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'

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
      <div className='App'>
        <div className='grid-cards'>
          {
          gifs.map((gif) => (
            <ImageCard
              key={gif.id}
              url={gif.images.fixed_height.url}
              title={gif.title}
            />
          ))
}
        </div>

      </div>
    </>
  )
}

export default App
