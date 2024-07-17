import React from 'react'
import NavComponent from '../NavComponent/NavComponent'
import './HeaderComponent.css'

const HeaderComponent = () => {
  return (
    <div className='header'>
        <div><NavComponent/></div>
        <img src='src/assets/images/logo.jpeg' alt='logo'/>
    </div>
  )
}

export default HeaderComponent