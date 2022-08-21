import React, {useMemo, useState} from "react";
import {SelectCity} from "../Select/Select";
import {ItemType, ValueType} from "../../App";

type PropsType = {
    itemsArr: ItemType[]
}

export const SelectFilterByCountry: React.FC<PropsType> = ({itemsArr}) => {

    const [city, setCity] = useState("");
    const [value, setValue] = useState<ValueType>(0);

    console.log("Select Filter By Country")
    const itemsArrFilterByCountry = useMemo(() => {
        return itemsArr.filter(i => i.country === "USA");
    }, [itemsArr]);

    return (
        <div>
            <h4>City from USA</h4>
            <SelectCity
                city={city}
                items={itemsArrFilterByCountry}
                value={value}
                setCity={setCity}
            />
        </div>
    );
};

const SelectByCountryWithMemo = React.memo(SelectFilterByCountry);


export const SelectFilterByLetter: React.FC<PropsType> = ({itemsArr}) => {

    const [city, setCity] = useState("");
    const [value, setValue] = useState<ValueType>(0);

    console.log("Select Filter By M")

    const itemsArrStartsWithM = useMemo(() => {
        return itemsArr.filter(i => i.title[0] === "M");
    }, [itemsArr]);

    return (
        <div>
            <h4>City starts with "M"</h4>
            <SelectCity
                city={city}
                items={itemsArrStartsWithM}
                value={value}
                setCity={setCity}
            />
        </div>
    );
};

const SelectByLetterWithMemo = React.memo(SelectFilterByLetter);

export const SelectFilterById: React.FC<PropsType> = ({itemsArr}) => {

    const [city, setCity] = useState("");
    const [value, setValue] = useState<ValueType>(0);

    console.log("Select Filter By Id")

    const itemsArrFilterById = useMemo(() => {
        return itemsArr.filter(i => i.id < 7);
    }, [itemsArr]);


    return (
        <div>
            <h4>City ID less than 7</h4>
            <SelectCity
                city={city}
                items={itemsArrFilterById}
                value={value}
                setCity={setCity}
            />
        </div>
    );
};

const SelectByIdWithMemo = React.memo(SelectFilterById);

let itemsArr: ItemType[] = [
    {id: 7, value: 7, title: "Miami", country: "USA"},
    {id: 5, value: 5, title: "Melbourne", country: "Australia"},
    {id: 6, value: 6, title: "Moscow", country: "Russia"},
    {id: 3, value: 3, title: "Los Angeles", country: "USA"},
    {id: 8, value: 8, title: "New York", country: "USA"},
];


export const SelectWithFilter = () => {

    const [counter, setCounter] = useState(0);

    console.log("Select Main")

    return (
        <>
            <div>
                <button onClick={() => {
                    setCounter(counter + 1)
                }}>+
                </button>
                {counter}
            </div>
            <div>
                <SelectByIdWithMemo itemsArr={itemsArr}/>
                <SelectByLetterWithMemo itemsArr={itemsArr}/>
                <SelectByCountryWithMemo itemsArr={itemsArr}/>
            </div>
        </>
    )

}