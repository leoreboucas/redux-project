import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  return (
    <div className="App">
      <h1>Exercício React - Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card 1">
          Conteúdo
        </Card>
      </div>
      <div className="linha">
        <Card title="Card 2">
          Y
        </Card>
      </div>
    </div>
  )
}

export default App