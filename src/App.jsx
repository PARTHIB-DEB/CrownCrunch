import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar';
import FoodQuality from './components/foodquality';
import MenuItems from './components/menuitems';
import TodayMenu from './components/todaymenu';
import CustoMers from './components/customers';
import PartyTime from './components/partytime';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <FoodQuality/>
      <MenuItems/>
      <PartyTime/>
      <TodayMenu/>
      <CustoMers/>
    </div>
  );
}

