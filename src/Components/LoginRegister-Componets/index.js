import React from 'react'
import Login from './Login-Component'
import Register from './Register-Component'
import './index.css';
export default function LoginRegister() {
  const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  }
  return (
    <section>
        <div className="container">
          <Login toggleForm={toggleForm}/>
          <Register toggleForm={toggleForm}/>
        </div>
  </section>
  )
}
