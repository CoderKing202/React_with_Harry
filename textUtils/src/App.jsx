import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let name = "<b>Harry3</b>"//safety feature not a bug
function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>  
  </nav>
  <div className="container">
    <h1>
      Hello {name}
    </h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, laborum.
       Voluptatem, earum consequuntur. Odio, velit vero optio non ut eos,
       dolorem deleniti perferendis, magni quo harum id natus quis officiis.
    </p>
    
    <viteLogo/>
  </div>
 </>
  )
}

export default App
