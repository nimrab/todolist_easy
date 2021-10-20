import React from "react";
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';


function App() {
    return (
        <>
            <Accordion title={"My Menu"} collapsed={false}/>
            <Accordion title={"User Menu"} collapsed={false}/>
            <Rating value={2}/>

            <OnOff switch={true}/>


        </>
    )
}


export default App;
