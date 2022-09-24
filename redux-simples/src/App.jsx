import './App.css'
import Intervalo from './components/Intervalo'
import ListaDeNomes from './components/ListaDeNomes'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'

function App() {

  return (
    <div className="App">
      <h1>Exercício React - Redux (Simples)</h1>
      <div className="linha">
        <Intervalo>Conteúdo</Intervalo>
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
      <div className="linha">
        <ListaDeNomes />
      </div>
    </div>
  )
}

export default App
