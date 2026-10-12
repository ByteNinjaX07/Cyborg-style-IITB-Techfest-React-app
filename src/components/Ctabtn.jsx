import React from 'react'
import styles from './Ctabtn.module.css'
import CAForm from './CAForm';
import { useState } from 'react';

function Ctabtn() {

  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button className={styles['cta']}  onClick={() => setShowForm(true)}>
        BECOME A CA
      </button>

      {showForm && (
        <CAForm onClose={() => setShowForm(false)}/>
      )}
    </div>
  )
}

export default Ctabtn
