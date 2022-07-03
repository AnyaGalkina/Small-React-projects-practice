import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {ItemType} from "../../App";
import styles from "./Select.module.css"

type SelectPropsType = {
    city: string;
    items: ItemType[];
    value?: number;
    setCity: (value: string) => void
}


const SecretSelectCity: React.FC<SelectPropsType> = ({city, setCity, value, items}) => {
    const [collapsed, setCollapsed] = useState(true);
    const [hoveredElementValue, setHoveredElementValue] = useState(value);
    const hoveredItem = items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])
    const toggleItems = () => {
        setCollapsed(!collapsed);
    };
    const onOptionClickHandler = (id: number) => {
        if (items) {
            let newCity = items.find(i => i.id === id) as ItemType
            setCity(newCity.title)
        }
        toggleItems();
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                const pretendentElementIndex = e.key === "ArrowDown" ?  items[i + 1] : items[i - 1];
                if (items[i].value === hoveredElementValue) {
                    pretendentElementIndex && setCity(pretendentElementIndex.title)
                    // setHoveredElementValue(items[i+1].value)
                    return;
                }
            }
            // setCity("None")
        }
        if (e.key === "Enter" || e.key === "ZEscape") {
            setCollapsed(true)
        }
    }

    return (
        //HIDE items with css
        // <div className={styles.select + " " + (!collapsed ?  styles.active : "" )}>
        <div className={styles.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <span className={styles.main}
                  onClick={toggleItems}>{city === "None" ? "Choose city to live ▼" : city + " ▼"}</span>
            {!collapsed &&
                <div className={styles.items}>
                    {items.map(i =>
                        <div
                            key={i.id}
                            onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                            className={styles.item + " " + (hoveredItem === i ? styles.selected  : "")}
                            //@ts-ignore
                            value={i.value}
                            onClick={() => onOptionClickHandler(i.id)}
                        >{i.title}</div>)}
                </div>}
        </div>
    )
};


export const SelectCity = React.memo(SecretSelectCity);

//
export function SecretSelectCityMUI(props: SelectPropsType) {
    const [city, setCity] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 80}}>
                <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={city}
                    onChange={handleChange}
                    autoWidth
                    label="City"
                >
                    {}
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.items.map(i => <MenuItem key={i.id} value={i.value}>{i.title}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    );
}

export const SelectCityMUI = React.memo(SecretSelectCityMUI);