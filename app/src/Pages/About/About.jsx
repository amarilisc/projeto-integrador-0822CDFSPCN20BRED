import React from 'react'
import './About.css'
import family from '../../assets/family.jpg'

function About() {
  return (
    <div className="about">
      <h1>Família Fofelhos</h1>
      <p>Há muitos anos, em uma pequena cozinha, nasceu nossa marca de bolos com uma única missão: levar 
        sorrisos através de delícias caseiras. Com receitas tradicionais e um toque de magia, conquistamos 
        corações e paladares. Cada fatia é um pedacinho de amor que compartilhamos com você.</p>
        <img src={ family } alt="Familia fofelhos" />
    </div>
  )
}

export default About