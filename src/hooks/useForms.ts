import { useState } from "react";

let useForms = (validationFunction: (val: string) => boolean) => {
    const [value, setvalue] = useState("");
    const [isInvalid, setisInvalid] = useState(true);
    const [touched, settouched] = useState(false);
    const [isFocused, setisFocused] = useState(false);

    let onChangeHandler = (newValue: string) => {
        if (!validationFunction(newValue)) setisInvalid(true);
        else setisInvalid(false);
        setvalue((oldValue) => newValue);
    };
    let onFocusHandler = () => {
        settouched(true);
        setisFocused(true);
    };
    let onBlurHandler = () => {
        setisFocused(false);
    };

    let error = isInvalid && touched && !isFocused;
    console.log(isInvalid,touched,!isFocused)

    return {
        value,
        onChangeHandler,
        onFocusHandler,
        onBlurHandler,
        error,
    };
};
export default useForms;
