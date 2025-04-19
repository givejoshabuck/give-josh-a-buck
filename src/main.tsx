import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GiveJoshABuckApp from './GiveJoshABuckApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <GiveJoshABuckApp/>
  </StrictMode>,
)
