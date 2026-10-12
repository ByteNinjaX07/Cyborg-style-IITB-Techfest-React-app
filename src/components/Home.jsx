import React from 'react'
import styles from './Home.module.css'
import Navbar from './Navbar'
import heroImage from '../assets/Neon Cyborg Over Techfest Campus.png'
import Ctabtn from './Ctabtn'

function Home() {
  return (
    <div className={styles['hero']}>
  
      <div className={styles['heroText']}>

        <div className={styles['headline']}>
          <h1 >THINK
            <br />
            BEYOND
           <br />
           <span>HUMAN</span>
           </h1>
        </div>
        
        <p>Where technology meets creativity, and you make it happen.</p>

        <Ctabtn/>
              
{/* 
        <img className={styles['hero-image']} src={heroImage} alt=""   /> */}
      </div>
    </div>
  )
}

export default Home