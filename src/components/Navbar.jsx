import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import styles from './Navbar.module.css'
import techfestlogo from '../assets/tflogo.e3d7f0b49b7acbfebe0a3a3be887c7a0.svg'
import iitblogo from '../assets/IIT Bombay Emblem on Black.png'

const links = [
  { label: 'Home', path: '/home' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About', path: '/about' },
  { label: 'Perks', path: '/perks'},
]

function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className={styles['navbar']}>

      <div className={styles['logos']}>
        
        <img
          src={iitblogo}
          alt="IIT Bombay logo"
          onClick={()=>{
            navigate('/')}}
        />

        <p>IIT BOMBAY</p>

        <img 
          src={techfestlogo}
          alt='logo'
          className={styles['tf-logo']}
          onClick={()=>{
            navigate('/')}}
        />

        <div style={{display:'flex',flexDirection:'column'}} onClick={()=>{
            navigate('/')}}>

          <h2 style={{color:'white',fontSize:'2rem',margin:'-5px'}}>Techfest</h2>
          <p>IIT BOMBAY 2026</p>

        </div>
        
          

      </div>

      <div className={styles['nav']}>
        {links.map((link) => (
          <button
            key={link.path}
            className={pathname.toLowerCase() === link.path ? styles['active'] : ''}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </button>
        ))}
      </div>

    </div>
  )
}

export default Navbar