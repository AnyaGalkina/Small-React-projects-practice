import React, {ChangeEvent, useRef, useState} from "react";

const ControlledInput = () => {
    const [text, setText] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <>
            <input value={text} onChange={onChangeHandler}/>
            {text}
        </>
    );
};

const UncontrolledInputWithRef = () => {
    const [text, setText] = useState("");

    let inputRef = useRef<HTMLInputElement>(null);

    const onClickHandler = () => {
        let el = inputRef.current as HTMLInputElement;
        setText(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>save</button>
            {text}
        </>
    );
};


export const SecretControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <><h4>Where do you want to live?</h4>
            <select value={parentValue} onChange={onChangeHandler}>
                <option value={"1"}>Dubai</option>
                <option value={"2"}>Russia</option>
                <option value={"3"}>Asia</option>
                <option value={"4"}>Other</option>
            </select>

        </>
        )
}

const ControlledSelect = React.memo(SecretControlledSelect);

export default ControlledSelect;