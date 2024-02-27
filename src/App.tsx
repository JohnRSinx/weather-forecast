import { QueryClient, QueryClientProvider } from 'react-query'
import { Dash } from './components/Dash'
import Header from './components/Header'
import Home from './components/Home'

import { ThemeProvider } from './components/theme/theme-provider'
import './globals.css'

const queryClient = new QueryClient()
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col items-center justify-center">
          <Header />
          <Home />
          <Dash />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
