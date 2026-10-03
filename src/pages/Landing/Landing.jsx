import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const [isLeaving, setIsLeaving] = useState(false)
  const navigate = useNavigate()

  const handleExplore = () => {
    setIsLeaving(true)

    setTimeout(() => {
      navigate('/characters')
    }, 1500)
  }

  return (
    <main className={`landing ${isLeaving ? 'landing-leaving' : ''}`}>
      <div className="background-layer">

        <div className="character character-spider-man"></div>
        <div className="character character-iron-man"></div>
        <div className="character character-captain-america"></div>
        <div className="character character-thor"></div>
        <div className="character character-hulk"></div>
        <div className="character character-black-widow"></div>
        <div className="character character-doctor-strange"></div>
        <div className="character character-scarlet-witch"></div>

      </div>

      <div className="dark-overlay"></div>

      <div className="landing-content">

        <h1>
          MARVEL
          <span>UNIVERSE EXPLORER</span>
        </h1>

        <button
          className="explore-button"
          onClick={handleExplore}
        >
          <span className="explore-arrow">↓</span>
          <span>EXPLORE</span>
        </button>

      </div>
    </main>
  )
}

export default Landing