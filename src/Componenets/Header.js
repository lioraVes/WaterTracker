import React from 'react'
import logo from '../Assets/water-logo.png';

export const Header = () => {
  return (
    <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <div> stay hydrated</div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  )
}
