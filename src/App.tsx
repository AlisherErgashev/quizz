import { useEffect } from 'react'

import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;


function App() {


    useEffect(() => {
        console.log('app')
    }, []);

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>

  )
}

export default App
