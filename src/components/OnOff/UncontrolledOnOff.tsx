import React, {useState} from 'react';
import styles from "./UncontrolledOnOf.module.css";

type PropsType = {
    onChange: (isOn: boolean) => void
}
const UncontrolledOnOff = (props: PropsType) => {
    const [isOn, setOnOff] = useState(false);

    let indicator = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "2px solid",
        borderColor: "#282c34",
        marginLeft: "5px",
        backgroundColor: isOn ? "green" : "red"
    }
    let onOnClickHandler = () => {
        setOnOff(true);
        props.onChange(true)
    }
    let onOffClickHandler = () => {
        setOnOff(false);
        props.onChange(false)
    }

    return (
        <div className={styles.wrapper}>
            <button
                className={`${styles.square} ${isOn && styles.green}`}
                onClick={onOnClickHandler}
            >On
            </button>
            <button
                className={`${styles.square} ${!isOn && styles.red}`}
                onClick={onOffClickHandler}
            >Off
            </button>
            <div
                style={indicator}
            ></div>
        </div>
    );
};

export default UncontrolledOnOff;