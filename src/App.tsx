import React from "react";
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";


function App() {
    return (
        <>
            <Accordion title={"My Menu"} collapsed={true}/>
            <Accordion title={"User Menu"} collapsed={true}/>
            <Rating value={2}/>
            <OnOff/>
            <UncontrolledAccordion title={"ToggleAccordion"}/>
            <UncontrolledRating />

        </>
    )
}


export default App;
