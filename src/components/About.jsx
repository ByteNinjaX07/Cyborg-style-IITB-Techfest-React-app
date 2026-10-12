import React from 'react'
import styles from './About.module.css'
import backgroundImage from '../assets/Futuristic Lakeside Cityscape with Network Globe.png'

function About() {
  return (
    <div className={styles['about-container']}>

      {/* FULL-SCREEN BACKGROUND LAYER
          - fixed to the window, so it always covers the whole page
          - sits behind the text (z-index: -1 in the CSS)
          - url("...") is quoted because the file name has spaces */}
      <div
        className={styles['bg']}
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />

      {/* LEFT: title */}
      <div className={styles['ldiv']}>
        <h1 className={styles['about-title']}>ABOUT</h1>
        <h2 className={styles['techfest-title']}>TECHFEST</h2>
        <hr className={styles['ldiv-line']} />
      </div>

      {/* RIGHT: text, stats, tagline */}
      <div className={styles['rdiv']}>
        <p>
          Techfest, IIT Bombay is Asia’s largest science and technology
          festival, bringing together innovation, creativity, and technology
          on one platform.
        </p>
        <p>
          Techfest 2026 explores the possibilities beyond the limits of
          today’s technology — connecting students, innovators, and technology
          enthusiasts with the future.
        </p>

        {/* each number and its label live in one block, so they never overlap */}
        <div className={styles['key-info']}>
          <div>
            <h2>1998</h2>
            <p>FOUNDED</p>
          </div>
          <div>
            <h2>1M+</h2>
            <p>ANNUAL REACH</p>
          </div>
          <div>
            <h2>100+</h2>
            <p>EVENTS</p>
          </div>
        </div>

        <div className={styles['tagline']}>
          <p>THINK</p>
          <p>BEYOND</p>
          <p>HUMAN</p>
        </div>
      </div>

    </div>
  )
}

export default About