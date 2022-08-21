import React, {useState} from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import {SelectCity, SelectCityMUI} from "./components/Select/Select";
import {DifficultCountingExample, HelpForReactMemo} from "./components/Examples/UseMemoExample";
import {SelectWithFilter} from "./components/Examples/SelectWithUseMemo";
import ExampleUseState from "./components/Examples/useStateAdditional";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type ItemType = {
    id: number;
    title: string;
    country: string;
    value: any
}
export let cityArr: ItemType[] = [
    {id: 0, value: 0, title: "None", country: "None"},
    {id: 1, value: 1, title: "Dubai", country: ""},
    {id: 2, value: 2, title: "Moscow", country: ""},
    {id: 3, value: 3, title: "Phuket", country: ""},
    {id: 4, value: 4, title: "Miami", country: ""},
    {id: 5, value: 5, title: "Melbourne", country: ""},
]
let cityArrWithoutNone: ItemType[] = [
    {id: 1, value: 1, title: "Dubai", country: ""},
    {id: 2, value: 2, title: "Moscow", country: ""},
    {id: 3, value: 3, title: "Phuket", country: ""},
    {id: 4, value: 4, title: "Miami", country: ""},
    {id: 5, value: 5, title: "Melbourne", country: ""},
]

function App() {
    const [value, setValue] = useState<ValueType>(0);
    const [collapsedAccordion, setCollapsedAccordion] = useState(true);
    const [isOn, setOnOff] = useState(true);
    const [city, setCity] = useState<string>(cityArr[0].title);

    return (
        <div className={"App"}>
            <div>
                <NavLink to={"/accordion"} className={"link"}>Accordion </NavLink>
                <span>----</span>
                <NavLink to={"/accordion/uncontrolled"} className={"link"}>Uncontrolled</NavLink>
            </div>
            <div>
                <NavLink to={"/rating"} className={"link"}>Rating</NavLink>
            </div>
            <div>
                <NavLink to={"/switcher"} className={"link"}>Switcher</NavLink>
            </div>
            <div>
                <NavLink to={"/my-select"} className={"link"}>Select</NavLink>
                <span>----</span>
                <NavLink to={"/my-select/MUI"} className={"link"}>Select MUI</NavLink>
            </div>
            <div>
                <NavLink to={"/factorial"}>Factorial UseMemo</NavLink>
            </div>
            <div>
                <NavLink to={"/selectWithFilter"}>Select with Filter (useMemo)</NavLink>
            </div>
            <div>
                <NavLink to={"/users"}>Users (useMemo)</NavLink>
            </div>
            <div>
                <NavLink to={"/exampleUseState"}>Counter with useState</NavLink>
            </div>


            <Routes>
                {/*<Route path={'/accordion/*'}*/}
                {/*       element={<div>*/}
                {/*           <Accordion title={"Menu 1"} collapsed={collapsedAccordion}*/}
                {/*                      onClickCallback={setCollapsedAccordion}/>*/}
                {/*           <Routes>*/}
                {/*               <Route path={'/uncontrolled'}*/}
                {/*                      element={<UncontrolledAccordion title={"Uncontrolled Accordion Menu"}/>}*/}
                {/*               />*/}
                {/*           </Routes>*/}
                {/*       </div>}*/}
                {/*/>*/}

                {/*Option 2 with use <Outlet />*/}

                <Route path={"/accordion"}
                       element={
                           <div>
                               <Accordion title={"Menu 1"}
                                          collapsed={collapsedAccordion}
                                          onClickCallback={setCollapsedAccordion}
                                          items={[
                                              {id: 1, title: "1", value: 1},
                                              {id: 2, title: "2", value: 2},
                                              {id: 3, title: "3", value: 3},
                                              {id: 4, title: "4", value: 4},
                                          ]}/>
                               <Outlet/>
                           </div>}
                >
                    <Route path={"/accordion/uncontrolled"}
                           element={<UncontrolledAccordion title={"Uncontrolled Accordion Menu"}/>}
                    />
                    <Route path={"*"} element={<div>page not found</div>}/>
                    <Route index element={<div>If no params in url, show this text </div>}/>
                    <Route path={":id/:id"} element={<div>two parameters with name "id" show id</div>}/>
                </Route>

                <Route path={"/rating"}
                       element={<Rating value={value} setValue={setValue}/>}
                />
                <Route path={"/switcher"}
                       element={<OnOff isOn={isOn} onClickCallback={setOnOff}/>}
                />
                <Route path={"/my-select"} element={
                    <div>
                        <SelectCity value={value} city={city} items={cityArr} setCity={setCity}/>
                        <Outlet/>
                    </div>}
                />
                <Route path={"/my-select/MUI"}
                       element={<SelectCityMUI city={city} items={cityArrWithoutNone} setCity={setCity}/>}
                />
                <Route path={"/factorial"}
                       element={<DifficultCountingExample/>}
                />
                <Route path={"/users"}
                       element={<HelpForReactMemo/>}
                />
                <Route path={"/selectWithFilter"}
                       element={<SelectWithFilter/>}
                />
                <Route path={"/exampleUseState"}
                       element={<ExampleUseState/>}
                />
                <Route path={"/*"} element={<h1>404</h1>}/>
                {/*<Route path={''} render={() => {}}/>*/}
            </Routes>

            {/*<Example/>*/}
            {/**/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledOnOff onChange={setOnOff}/> {isOn.toString()}*/}
        </div>
    );
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
