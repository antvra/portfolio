import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/">{/* <Home /> */}</Route>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
