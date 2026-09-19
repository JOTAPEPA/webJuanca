import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './Home.jsx'
import './Main.css'
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>   
       <Home />
    </Provider>
  </StrictMode>,
)
