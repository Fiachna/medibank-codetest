import './App.css'
import { CatList } from './components/cat-list/cat-list'

function App() {
  return (
    <>
      <CatList url={import.meta.env.VITE_API_ENDPOINT_URL} />
    </>
  )
}

export default App
