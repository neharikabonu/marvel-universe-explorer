import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CharacterExplorer.css'
import characters from '../../data/characters'

const CharacterExplorer = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const navigate = useNavigate()

  const filteredCharacters = characters.filter((character) => {
    const searchTerm = search.toLowerCase()

    const matchesSearch =
      character.name.toLowerCase().includes(searchTerm) ||
      character.realName.toLowerCase().includes(searchTerm)

    const matchesFilter =
      filter === 'All' ||
      character.category === filter ||
      character.teams?.includes(filter)

    return matchesSearch && matchesFilter
  })

  return (
    <main className="character-explorer">
      
      <header className="explorer-header">
  <div className="explorer-navigation">
    <button
      className="explorer-home-button"
      onClick={() => navigate('/')}
    >
      Home
    </button>
  </div>

  <p className="explorer-label">MARVEL UNIVERSE</p>

  <h1>Character Explorer</h1>

  <p className="explorer-subtitle">
    Explore the characters, stories, and connections.
  </p>
</header>

      <section className="explorer-content">

        <div className="search-section">
          <input
            type="text"
            placeholder="Search by character or real name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-section">
          {[
            'All',
            'Heroes',
            'Villains',
            'Avengers',
            'Guardians',
            'X-Men'
          ].map((item) => (
            <button
              key={item}
              className={filter === item ? 'active' : ''}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="character-grid">
          {filteredCharacters.map((character) => (
            <article
  className="character-card"
  key={character.id}
  style={{
    '--accent': character.theme.accent
  }}
  onClick={() =>
    navigate(`/characters/${character.id}`)
  }
>
              <img
                src={character.image}
                alt={character.name}
              />

              <div className="character-card-overlay"></div>

              <div className="character-info">
                <p className="character-category">
                  {character.category}
                </p>

                <h2>{character.name}</h2>

                <p className="character-real-name">
                  {character.realName}
                </p>

                <button
                  className="view-profile-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/characters/${character.id}`)
                  }}
                >
                  View Profile
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <div className="no-results">
            <h2>No characters found</h2>
            <p>Try another character or filter.</p>
          </div>
        )}

      </section>
    </main>
  )
}

export default CharacterExplorer