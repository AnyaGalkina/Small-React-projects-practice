import React from 'react';
import styles from "./UncontrolledOnOf.module.css";

type OnOfPropsType = {
    isOn: boolean;
    onClickCallback: (isOn: boolean) => void;
}

const SecretOnOff = ({isOn, onClickCallback}: OnOfPropsType) => {

    let onOnClickHandler = () => {
        onClickCallback(true);
    }

    let onOffClickHandler = () => {
        onClickCallback(false);
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
                className={`${styles.round} ${isOn ? styles.green : styles.red}`}
            ></div>
        </div>
    );
}

const OnOff = React.memo(SecretOnOff);
export default OnOff;