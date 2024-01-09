import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  const [count, setCount] = useState(0)

  let myObj = {
    name:"BOB",
    age:21
  }

  let myArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black rounded p-4 mb-5'>Tailwind Test</h1>
      <Card username= "Sammy" btnTxt = "Visit me"/>
      <Card username = "Danny" btnTxt = "Click me"/>
    </>
  )
}

export default App
