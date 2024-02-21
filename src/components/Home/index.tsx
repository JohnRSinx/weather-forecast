import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import axios from 'axios'

const Home = () => {
  const [local, setLocal] = useState('')
  const [weather, setWeather] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=8355d68b043db26335f84c0455b810d2&units=metric`,
        )
        console.log(response.data.main.temp)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
    if (local) {
      fetchData()
    }
  }, [local])
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocal(event.target.value)
  }

  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <h1 className="text-base ">
        Boas vindas ao <span className="text-indigo-400">TypeWeather</span>
      </h1>
      <p className="text-xs text-slate-500">
        Escolha um local para ver a previsão do tempo
      </p>
      <Input
        placeholder="Buscar local"
        className="mt-4"
        onChange={handleInputChange}
      />
      <p>{weather}</p>
    </div>
  )
}

export default Home
