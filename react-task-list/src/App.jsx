import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//importo i componenti
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

function App() {


  return (
    <>
      <AppHeader />
      <AppMain />
      <footer></footer>
    </>
  )
}

export default App
