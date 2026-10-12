import React from 'react'
import Ctabtn from './Ctabtn';
import backgroundImage from '../assets/ChatGPT Image Oct 9, 2026, 08_25_32 PM.png';
import styles from './Perks.module.css'

const perks = [
  {
    title: "EXCLUSIVE ACCESS",
    text: "Get early access to events, workshops, guest lectures and premium experiences.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18M4 18l-1-10 5 4 4-7 4 7 5-4-1 10" /></svg>,
  },
  {
    title: "NETWORKING",
    text: "Connect with like-minded innovators, industry experts, faculty and fellow students.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3" /><circle cx="5" cy="10" r="2" /><circle cx="19" cy="10" r="2" /><path d="M6 20c0-3.5 2.7-6 6-6s6 2.5 6 6M1 18c0-2 1.5-3.5 4-3.5M23 18c0-2-1.5-3.5-4-3.5" /></svg>,
  },
  {
    title: "CERTIFICATES",
    text: "Earn official Techfest & IIT Bombay certificates for your contributions.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h9l4 4v14H6z" /><path d="M9 10h7M9 13h7M9 16h4" /></svg>,
  },
  {
    title: "LEADERSHIP EXPERIENCE",
    text: "Build real-world skills in event management, marketing, content creation and more.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v4h3l8 5V5l-8 5zM17 9c1.5 1 1.5 5 0 6" /></svg>,
  },
  {
    title: "RECOGNITION",
    text: "Stand a chance to be featured on official Techfest platforms and get special rewards.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></svg>,
  },
  {
    title: "MEMORABLE JOURNEY",
    text: "Be part of India's biggest tech and cultural festival — and create memories for life.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c3 2 5 6 5 10l-2 4H9l-2-4c0-4 2-8 5-10zM9 16l-2 4 3-1M15 16l2 4-3-1" /><circle cx="12" cy="9" r="1.5" /></svg>,
  },
];
function Perks() {
  
  return (

    <div className={styles['page']}>
      
      <div
        className={styles['bg']}
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      />
      
      <main className={styles['content']}>

        

        {/* LHS */}

        <section>
          <div className={styles['eyebrow']}><span className={styles['eyebrow-line']} />PERKS &amp; BENEFITS</div>
          <h1>
            <span className={styles['white']}>MORE THAN</span>
            <span className={styles['orange']}>JUST A FEST</span>
          </h1>
          <p className={styles['lead']}>
            Being a Campus Ambassador isn't just about promoting Techfest — it's about being part of something bigger. Here's what you get.
          </p>

          <Ctabtn/>
          
        </section>
      

        {/* RHS */}


        <section className={styles['grid']}>
          {perks.map((p) => (
            <div className={styles['card']} key={p.title}>
              <div className={styles['card-inner']}>
                <div className={styles['ring']}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className={styles['card-line']} />
              </div>
            </div>
          ))}
        </section>

      </main>
     
    </div>
  )
}

export default Perks