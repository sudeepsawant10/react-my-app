import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
export const Signup = ()=>{
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characets or less')
        .required('Required'),
        lastName: Yup.string()
        .max(15, 'Must be 15 characets or less')
        .required('Required'),
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is Required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is Required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password do not matched')
        .required('Confirm your password')
    });

    return(
        <div>
            <Formik 
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                
                validationSchema={validate}
                onSubmit={values =>{
                    console.log(values)
                }}
            >
                {
                    formik=>(
                        <div>
                            <h1  className="my-4 font-weght-bold .display-r">Sign Up</h1>
                            <Form>
                                <TextField label="First Name" name="firstName" type="text" />
                                <TextField label="Last Name" name="lastName" type="text" />
                                <TextField label="Email" name="email" type="email" />
                                <TextField label="Password" name="password" type="password" />
                                <TextField label="Confirm Password" name="confirmPassword" type="password" />

                                <button className="btn btn-dark mt-3" type="submit">Submit</button>
                                <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                            </Form> 
                        </div>
                    )
                }
            </Formik>
        </div>
    )
}