import Header from './components/Header'
import Home from './components/Home'
import { ThemeProvider } from './components/theme/theme-provider'
import './globals.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-center">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
