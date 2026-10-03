import React, {useEffect} from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import './CharacterProfile.css'
import characters from '../../data/characters'

const CharacterProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
  window.scrollTo(0, 0)
}, [id])

  const character = characters.find(
    (character) => character.id === id
  )

 if (!character) {
  return <Navigate to="/404" replace />
}

  const getCharacter = (name) =>
    characters.find((character) => character.name === name)

  const renderCharacters = (items) => {
    return items?.map((name) => {
      const relatedCharacter = getCharacter(name)

      return (
        <button
          key={name}
          className="connection-card"
          onClick={() =>
            relatedCharacter &&
            navigate(`/characters/${relatedCharacter.id}`)
          }
          disabled={!relatedCharacter}
        >
          {name}
        </button>
      )
    })
  }

  const renderList = (items) => {
    return (
      <div className="profile-list">
        {items?.map((item, index) => (
          <div className="profile-list-item" key={`${item}-${index}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
  
    <main
  key={character.id}
  className="character-profile"
  style={{
    '--accent': character.theme.accent,
    '--profile-background': `url(${character.theme.background})`
  }}
>

  <div className="profile-navigation">
  <button
    className="back-button"
    onClick={() => navigate('/characters')}
  >
    ← Back to Characters
  </button>

  <button
    className="home-button"
    onClick={() => navigate('/')}
  >
    Home
  </button>
</div>

      <header className="profile-header">
        <h1>{character.name}</h1>
        <h2>{character.realName}</h2>

        <p className="profile-description">
          {character.description}
        </p>
      </header>

      <section className="profile-section">
        <h3>Powers & Abilities</h3>

        <div className="powers-list">
          {character.powers.map((power) => (
            <span key={power}>{power}</span>
          ))}
        </div>

        {character.abilities && (
          <div className="abilities-section">
            <h4>Abilities</h4>

            <div className="powers-list">
              {character.abilities.map((ability) => (
                <span key={ability}>{ability}</span>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="profile-section">
        <h3>Identity</h3>

        <div className="identity-grid">
          <div>
            <span>Aliases</span>
            <p>{character.identity.aliases.join(', ')}</p>
          </div>

          <div>
            <span>Occupation</span>
            <p>{character.identity.occupation}</p>
          </div>

          <div>
            <span>Universe</span>
            <p>{character.identity.universe}</p>
          </div>

          <div>
            <span>Status</span>
            <p>{character.identity.status}</p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h3>Origin</h3>

        <p className="origin-text">
          {character.origin}
        </p>
      </section>

      <section className="profile-section">
        <h3>Marvel Connections</h3>

        <div className="connections-grid">

          <div className="connection-group">
            <h4>Family</h4>
            <div className="connection-list">
              {renderCharacters(character.family)}
            </div>
          </div>

          <div className="connection-group">
            <h4>Friends</h4>
            <div className="connection-list">
              {renderCharacters(character.friends)}
            </div>
          </div>

          <div className="connection-group">
            <h4>Allies</h4>
            <div className="connection-list">
              {renderCharacters(character.allies)}
            </div>
          </div>

          <div className="connection-group">
            <h4>Villains</h4>
            <div className="connection-list">
              {renderCharacters(character.villains)}
            </div>
          </div>

          <div className="connection-group">
            <h4>Relationships</h4>
            <div className="connection-list">
              {renderCharacters(character.relationships)}
            </div>
          </div>

        </div>
      </section>

      <section className="profile-section">
        <h3>Movies</h3>
        {renderList(character.movies)}
      </section>

      <section className="profile-section">
        <h3>Series</h3>
        {renderList(character.series)}
      </section>

      <section className="profile-section">
        <h3>Comics</h3>
        {renderList(character.comics)}
      </section>

      <section className="profile-section">
        <h3>Actors & Versions</h3>

        <div className="connections-grid">

          <div className="connection-group">
            <h4>Actors</h4>
            <div className="connection-list">
              {character.actors?.map((actor) => (
                <span className="connection-card" key={actor}>
                  {actor}
                </span>
              ))}
            </div>
          </div>

          <div className="connection-group">
            <h4>Versions</h4>
            <div className="connection-list">
              {character.versions?.map((version) => (
                <span className="connection-card" key={version}>
                  {version}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {character.timelines && (
        <section className="profile-section">
          <h3>Spider-Man Timelines</h3>

          <div className="timeline-grid">
            {Object.entries(character.timelines).map(
              ([version, events]) => (
                <div className="timeline-group" key={version}>
                  <h4>{version}</h4>

                  {renderList(events)}
                </div>
              )
            )}
          </div>
        </section>
      )}

      {character.relatedCharacters && (
        <section className="profile-section related-section">
          <h3>Related Characters</h3>

          <div className="related-characters">
            {character.relatedCharacters.map((relatedId) => {
              const relatedCharacter = characters.find(
                (item) => item.id === relatedId
              )

              if (!relatedCharacter) return null

              return (
                <button
                  key={relatedCharacter.id}
                  className="related-character-card"
                  onClick={() =>
                    navigate(`/characters/${relatedCharacter.id}`)
                  }
                >
                  <img
                    src={relatedCharacter.image}
                    alt={relatedCharacter.name}
                  />

                  <div>
                    <h4>{relatedCharacter.name}</h4>
                    <p>{relatedCharacter.realName}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </section>
      )}

    </main>
  )
}

export default CharacterProfile