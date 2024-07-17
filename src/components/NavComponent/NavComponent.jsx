import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavComponent.css'

function NavComponent() {
  return (
    <>
        <NavLink className='link-deco' to='/'>Home |</NavLink>
        <NavLink className='link-deco' to='/about'> About |</NavLink>
        <NavLink className='link-deco' to='/department'> Department |</NavLink>
        <NavLink className='link-deco' to='/events'> Events</NavLink>
    </>
  )
}

export default NavComponent