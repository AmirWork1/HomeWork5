import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export default function Header() {
  const {bgColor} = useContext(AppContext)
  return (
    <header className='container-fluid' style={{ backgroundColor: bgColor }}>
      <div className='container p-2'>
        <div className='row align-items-center'>
          <div className='logo col-auto'>
            <h2>Mornig --{bgColor}</h2>
          </div>
          <nav className='col-auto'>
            <ul className='d-md-flex'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pageColor">Page Color</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
