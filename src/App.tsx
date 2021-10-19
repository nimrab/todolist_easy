import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";



function App() {
    return (
        <>
            <Accordion title={"My Menu"} collapsed={false}/>
            <Accordion title={"User Menu"} collapsed={false}/>
            <Rating value={2}/>

        </>
    );
}



export default App;
