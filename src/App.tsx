import React, {useState} from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
    const [value, setValue] = useState<ValueType>(0);
    const [collapsedAccordion, setCollapsedAccordion] = useState(true);
    const [isOn, setOnOff] = useState(true);

    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is App component"}/>*/}

            <UncontrolledAccordion title={"Uncontrolled Accordion Menu"}/>
            <Accordion
                title={"Menu 1"}
                collapsed={collapsedAccordion}
                onClickCallback={setCollapsedAccordion}
            />

            <UncontrolledRating/>

            <Rating value={value} setValue={setValue}/>
            {/*<Rating value={value} setValue={setValue}/>*/}

            <OnOff isOn={isOn} onClickCallback={setOnOff}/>
            <UncontrolledOnOff onChange={setOnOff}/> {isOn.toString()}
        </div>
    );
}

function PageTitle(props: any) {
    return <div>{props.title}</div>
}

export default App;


// type StudentType = {
//     name: string
//     age: number
//     isMarried: boolean
//     scores: number
// }
// const students =
// [
//     {
//         name: "Nick",
//         age: 22,
//         isMarried: false,
//         scores: 100
//     },
//
//     {
//         name: "Nick",
//         age: 22,
//         isMarried: false,
//         scores: 100
//     },
//     {
//         name: "Nick",
//         age: 22,
//         isMarried: false,
//         scores: 100
//     },
//
// ]
//
// const getStudentsName = (arr: Array<StudentType>) => {
//     const arrResult = [];
//     for(let i=0; i< arr.length; i++) {
//         arrResult.push(arr[i].name)
//     }
//     console.log(arrResult);
//     // return arr.map(s => s.name);
// }
// getStudentsName(students);
//
// //@ts-ignore
// Array.prototype.myFn = function (){alert("yo!")};
// //@ts-ignore
// students.myFn()
