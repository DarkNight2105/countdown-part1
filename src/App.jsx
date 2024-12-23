import Title from './components/Title'
import Counter from './components/Counter'
import NewYear from "./assets/newyear.jpg"
import useCountdown from './hooks/useCountdown'
import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00")

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2024" />
        <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour > 9 ? hour : '0' + hour} />
        <Counter title="Minutos" number={minute > 9 ? minute : '0' + minute} />
        <Counter title="Segundos" number={second > 9 ? second : '0' + second} />
        </div>
      </div>
    </div>
  )
}

export default App
