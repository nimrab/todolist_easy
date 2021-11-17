import React, {MouseEventHandler, useState} from "react";
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {NewControlledAccordion} from "./components/Accordion/NewControlledAccordion";
import {SelectAutoWidth} from "./components/Select/SelectAutoWidth";
import {SelectChangeEvent} from "@mui/material/Select";
import {CustomSelect} from "./components/Select/CustomSelect";


export type selectStateType = {
    initialTitle: string
    values: Array<string>
    chosenValue: string
}

export type selectValueType = {
    id:number
    value: string
}

export type customSelectStateType = {
    values: Array<selectValueType>
    chosenValue: string
}



function App() {


    let [collapsed, setCollapsed] = useState<boolean>(true)
    const accordionCollapseChange = () => {
        setCollapsed(!collapsed)
    }

    const handleSelectChange = (event: SelectChangeEvent) => {
        const newState = {...selectDefaultState, chosenValue: event.target.value}
        setSelectState(newState)
    }
    const selectDefaultState: selectStateType = {
        initialTitle: 'ChooseMe',
        values: ['Moscow', 'Kazan', 'Ufa', 'Rostov'],
        chosenValue: ''
    }
    const [selectState, setSelectState] = useState<selectStateType>(selectDefaultState)







    const customSelectState: customSelectStateType = {
        values:[
            {id: 1, value: 'Moscow'},
            {id: 2, value: 'Ufa'},
            {id: 3, value: 'Kazan'},
            {id: 4, value: 'Rostov'},
        ],
        chosenValue: 'Choose your city'
    }
    const [customSelect, setCustomSelect] = useState<customSelectStateType>(customSelectState)



    const handleCustomSelectChange = (value:string) => {
        const newState = {...customSelectState, chosenValue: value }
        setCustomSelect(newState)
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

            <CustomSelect
                values={customSelect.values}
                selectValue={handleCustomSelectChange}
                chosenValue={customSelect.chosenValue}

            />

        </>
    )
}


export default App;
