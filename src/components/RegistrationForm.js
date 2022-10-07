import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import CheckboxSelectBetweenTwo from "./CheckboxSelectBetweenTwo";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    sname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    description: Yup.string(),
});

const RegistrationForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                sname: '',
                email: '',
                description: '',
                wantGetUpdatesByEmail: true,
            }}
            validationSchema={SignupSchema}

            onSubmit={(values) =>
                console.log(JSON.stringify(values, null, 1))
            }
        >
            {({errors, touched}) => {
                return (<Form>
                        <label htmlFor="name">Name</label>
                        <br/>
                        <Field name="name"/>
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <br/>

                        <label htmlFor="sname">Surname</label>
                        <br/>
                        <Field name="sname"/>
                        {errors.sname && touched.sname ? (
                            <div>{errors.sname}</div>
                        ) : null}
                        <br/>

                        <label htmlFor="email">Email</label>
                        <br/>
                        <Field name="email" type="email"/>
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <br/>

                        <label htmlFor="description">Description</label>
                        <br/>
                        <Field name="description" type="text"/>
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                        ) : null}
                        <br/>

                        <Field name="wantGetUpdatesByEmail" type="checkbox" component={CheckboxSelectBetweenTwo}/>

                        <button type="submit">Submit</button>

                    </Form>
                )
            }}
        </Formik>
    );
};

export default RegistrationForm;