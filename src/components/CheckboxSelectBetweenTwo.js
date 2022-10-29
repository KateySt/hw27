import {useFormikContext} from "formik";
import React, {useState} from "react";

const CheckboxSelectBetweenTwo = ({field}) => {
    const formikProps = useFormikContext();
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const checkingFirstCheckbox = (e) => {
        setFirst(e.target.checked)
        if (e.target.checked === true) {
            setSecond(false);
        }
    }

    const checkingSecondCheckbox = (e) => {
        setSecond(e.target.checked);
        if (e.target.checked === true) {
            setFirst(false);
           formikProps.setFieldValue("wantGetUpdatesByEmail", false);
        }
    }

    return (
        <label className="text-gray-500 font-bold">
            <input id="checkbox1" {...field} type="checkbox" onClick={checkingFirstCheckbox} checked={first}/>
            <span>Confirm sending your email</span>
            <br/>
            <input id="checkbox2" type="checkbox" onClick={checkingSecondCheckbox} checked={second}/>
            <span>Do not send letters</span>
            <br/>
        </label>
    );
};
export default CheckboxSelectBetweenTwo;