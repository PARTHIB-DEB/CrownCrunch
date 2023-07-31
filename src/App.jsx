import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar';
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
    </div>
  );
}

