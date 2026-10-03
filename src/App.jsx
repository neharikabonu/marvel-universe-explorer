import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import CharacterExplorer from './pages/CharacterExplorer/CharacterExplorer'
import CharacterProfile from './pages/CharacterProfile/CharacterProfile'
import NotFound from './pages/NotFound/NotFound'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/characters" element={<CharacterExplorer />} />
        <Route path="/characters/:id" element={<CharacterProfile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App