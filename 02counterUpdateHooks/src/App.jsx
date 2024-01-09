import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  let addValue = ()=>{
    if(count == 20) {
      console.log('max value permitted is 20')
      return
    }
    setCount(count+1);
  }

  let removeValue = ()=>{
    if(count == 0 ) {
      console.log('min value allowed is 0')
      return
    }
    setCount(count-1);

  }

  return (
    <>
     <h1>Counter Updation</h1>
     <h3>Current counter value : {count}</h3>
     
      <div><button onClick={addValue}>Add</button></div>
      <br />
      <div><button onClick={removeValue}>Remove</button></div>

    
    </>
  )
}

export default App
