import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PokemonDetail from '../pages/PokemonDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemon/:id' element={<PokemonDetail />} />
    </Routes>
  )
}

export default RoutesIndex

// En el route de PokemonDetail, en el path después de pokemon, podemos poner id, o pokemon.id o lo que nosotros queramos.
