import React from 'react'


import { useState } from "react";
import {
    Link
} from "react-router-dom";

export const Signup = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");


    let onSignUpSubmitHandler = async (e) => {

        e.preventDefault();
        try {

            let res = await fetch("http://localhost:8080/api/auth/signup", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    contactNumber: contactNumber,
                    role: ["admin"],
                }),
            });
            let resJson = await res.json();
            console.log("APIResult: SignUp" + JSON.stringify(resJson));
            console.log("Body: " + email);
            if (res.status === 200) {
                //setName("");
                //setEmail("");
                //setMessage("User created successfully");
            } else {
                //setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <>
            <div>
                <div>
                    <div className="row">
                        <div className="mx-auto col-10 col-md-8 col-lg-4">
                            <div className="text-center" style={{ margin: "20px" }}>
                                <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" width="30" height="24" />
                            </div>

                            <form className="form-floating" onSubmit={onSignUpSubmitHandler}>
                                <div className="form-floating mb-3">
                                    <input type="name" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setFirstName(e.target.value)} />
                                    <label htmlFor="floatingInput">First Name*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Password" onChange={(e) => setLastName(e.target.value)} />
                                    <label htmlFor="floatingInput">Last Name*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingPassword">Email Address*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password*</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <label htmlFor="floatingPassword">Confirm Password*</label>
                                </div>
                                <div className="form-floating">
                                    <input type="tel" id="floatingInput" className="form-control  mb-3" placeholder="Password" onChange={(e) => setContactNumber(e.target.value)} />
                                    <label htmlFor="floatingPassword">Contact Number*</label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-3" style={{ width: "100%", backgroundColor: "#3f51b5" }}>
                                    SIGN UP
                                </button>

                                <div className="form-floating ">
                                    <Link className="nav-link active" aria-current="page" to="/login"><u>Already have an account? Sign in</u></Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
