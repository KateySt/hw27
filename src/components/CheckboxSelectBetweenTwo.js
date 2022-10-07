import {useFormikContext} from "formik";
import React from "react";

const CheckboxSelectBetweenTwo = ({field}) => {
    const formikProps = useFormikContext();

    const checkingFirstCheckbox = () => {
        if (document.getElementById('checkbox1').checked === true) {
            document.getElementById('checkbox2').checked = false;
        }
    }

    const checkingSecondCheckbox =() => {
        if (document.getElementById('checkbox2').checked === true) {
            document.getElementById('checkbox1').checked = false;
            formikProps.setFieldValue("wantGetUpdatesByEmail", false);
        }
    }

    return (
        <label className="text-gray-500 font-bold">
            <input id="checkbox1" {...field}  type="checkbox" onClick={checkingFirstCheckbox}/>
            <span>Confirm sending your email</span>
            <br/>
            <input id="checkbox2" type="checkbox" onClick={checkingSecondCheckbox}/>
            <span>Do not send letters</span>
            <br/>
        </label>
    );
};
export default CheckboxSelectBetweenTwo;