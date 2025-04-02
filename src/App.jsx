import { useState } from 'react'
import Home from './Templates/Home'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
       <Home rollno={10} name="Rinku A Salunke"  address="Alsunde"/>
       <Home rollno={11} name="Snehal A Salunke"  address="Alsunde1"/>

        </div>
    </>
  )
}

export default App
