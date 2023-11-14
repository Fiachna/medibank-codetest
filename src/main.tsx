import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CatList } from './components/cat-list/cat-list.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CatList url={import.meta.env.VITE_API_ENDPOINT_URL} />
  </React.StrictMode>,
)
