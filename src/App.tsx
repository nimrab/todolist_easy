import React, {useState} from "react";
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {NewControlledAccordion} from "./components/Accordion/NewControlledAccordion";


function App() {


    let [collapsed, setCollapsed] = useState<boolean>(true)
    const accordionCollapseChange = () => {
        setCollapsed(!collapsed)
    }

    return (
        <>
            <Accordion title={"My Menu"} collapsed={true}/>
            <Accordion title={"User Menu"} collapsed={true}/>
            <Rating value={2}/>
            <OnOff/>
            <UncontrolledAccordion title={"ToggleAccordion"}/>
            <UncontrolledRating />

            <NewControlledAccordion title={"Controlled menu"} collapsed={collapsed} callback={accordionCollapseChange}/>

        </>
    )
}


export default App;
