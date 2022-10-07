import {useFormikContext} from "formik";
import React from "react";

const CheckboxSelectBetweenTwo = ({field}) => {
    const formikProps = useFormikContext();
    return (
        <label className="text-gray-500 font-bold">
            <input id="1" {...field}  type="checkbox" onClick={() => {
                if (document.getElementById('1').checked === true) {
                    document.getElementById('2').checked = false;
                }
            }}/>
            <span>Confirm sending your email</span>
            <br/>
            <input id="2" type="checkbox" onClick={() => {
                if (document.getElementById('2').checked === true) {
                    document.getElementById('1').checked = false;
                    formikProps.setFieldValue("wantGetUpdatesByEmail", false);
                }
            }}/>
            <span>Do not send letters</span>
            <br/>
        </label>
    );
};
export default CheckboxSelectBetweenTwo;