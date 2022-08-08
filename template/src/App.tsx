import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <Router>
      <Suspense>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
