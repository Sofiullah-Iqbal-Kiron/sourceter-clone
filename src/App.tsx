import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Intro2} from "./components/Intro2";
import {Navbar1} from "./components/Navbar1";
import {AboutUs3} from "./components/AboutUs3";
import {GetInTouch10} from "./components/GetInTouch10";

function App() {
    return (
        <div className='absolute'>
            <Navbar1/>
            <Intro2/>
            <AboutUs3/>
            <GetInTouch10/>
        </div>
    )
}

export default App
