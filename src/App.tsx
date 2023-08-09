import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Intro2} from "./components/Intro2";
import {Navbar1} from "./components/Navbar1";
import {AboutUs3} from "./components/AboutUs3";
import {GetInTouch10} from "./components/GetInTouch10";
import {Benefits9} from "./components/Benefits9";

function App() {
    return (
        <>
            <Navbar1/>
            <Intro2/>
            <AboutUs3/>
            <Benefits9/>
            <GetInTouch10/>
        </>
    )
}

export default App
