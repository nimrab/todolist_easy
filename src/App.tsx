import React, {useState} from "react";
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {NewControlledAccordion} from "./components/Accordion/NewControlledAccordion";
import {SelectAutoWidth} from "./components/Select/SelectAutoWidth";
import {SelectChangeEvent} from "@mui/material/Select";


export type selectStateType = {
    initialTitle: string
    values: Array<string>
    chosenValue: string
}


function App() {


    let [collapsed, setCollapsed] = useState<boolean>(true)
    const accordionCollapseChange = () => {
        setCollapsed(!collapsed)
    }


    const selectDefaultState: selectStateType = {
        initialTitle: 'ChooseMe',
        values: ['option 1', 'option 2', 'option 3', 'option 4'],
        chosenValue: ''
    }


    const [selectState, setSelectState] = useState<selectStateType>(selectDefaultState)


    const handleSelectChange = (event: SelectChangeEvent) => {
        const newState = {...selectDefaultState, chosenValue: event.target.value}
        setSelectState(newState)
    }


    return (
        <>
            <Accordion title={"My Menu"} collapsed={true}/>
            <Accordion title={"User Menu"} collapsed={true}/>
            <Rating value={2}/>
            <OnOff/>
            <UncontrolledAccordion title={"ToggleAccordion"}/>
            <UncontrolledRating/>

            <NewControlledAccordion title={"Controlled menu"} collapsed={collapsed} callback={accordionCollapseChange}/>

            <SelectAutoWidth
                title={selectState.initialTitle}
                value={selectState.chosenValue}
                onChangeCallback={handleSelectChange}
                values={selectDefaultState.values}

            />

        </>
    )
}


export default App;
