import React, {useState} from "react";
import styles from "./UncontrolledRating.module.css";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {}

function UncontrolledRating(props: RatingPropsType) {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    value: ValueType;
    setValue: (value: ValueType) => void;
}

function Star(props: StarPropsType) {

    return (
        <span
            className={styles.star}
            onClick={() => {
                props.setValue(props.value)
            }}
        >{props.selected ? "★" : "☆"}</span>
    )
}

export default UncontrolledRating;