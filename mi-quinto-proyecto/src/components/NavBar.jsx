import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <a className='navbar-brand' href='#'>Pokédex</a>

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <li className='nav-item px-2'>
          <a className='nav-link' to='/'>Home</a>
        </li>
        <li className='nav-item px-2'>
          <a className='nav-link' to='/about'>Acerca de Pokémon</a>
        </li>
      </ul>

    </nav>
  )
}
export default Navbar
