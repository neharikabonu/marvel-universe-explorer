import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <main className="not-found">
      <div className="not-found-content">
        <p className="not-found-label">MARVEL UNIVERSE EXPLORER</p>

        <h1>404</h1>

        <div className="not-found-divider"></div>

        <h2>Universe Not Found</h2>

        <p className="not-found-description">
          The page you're looking for doesn't exist in this universe.
        </p>

        <div className="not-found-actions">
          <button onClick={() => navigate('/characters')}>
            Explore Characters
          </button>

          <button onClick={() => navigate('/')}>
            Back Home
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound