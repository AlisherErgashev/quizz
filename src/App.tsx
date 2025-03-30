import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import React from 'react';
import About from './pages/About.tsx';
import Quiz from './pages/Quiz.tsx';


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
