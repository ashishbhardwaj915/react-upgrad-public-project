import React from 'react'


import { useState } from "react";
import {
    Link,
    useNavigate
} from "react-router-dom";

import { Header } from '../header/Header';

export const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    localStorage.removeItem("token");


    const changeState = () => {
        setShowSearch(true);
    };

    let onSubmitHandler = async (e) => {
        // let value=validateSignInTextfield();
        //console.log("value: "+value);

        e.preventDefault();
        try {

            let res = await fetch("http://localhost:8080/api/auth/signin", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: password
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                const responseStr = JSON.stringify(resJson)
                changeState();
                var dataJson = JSON.parse(responseStr);
                console.log("APIResult: " + JSON.stringify(dataJson.token));
                localStorage.setItem("token", dataJson.token);

                navigate("/products");
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


    /*let validateSignInTextfield = () => {
        if (email.length <= 0) {
            console.log("Bad email");
            return false;
        }
        else if (password <= 0) {
            console.log("Bad pass");
            return false;
        }else{
            console.log("All good false");
            return true;
        }
        
    }*/
    return (
        <>
            <div>
                <div>
                    <div className="row">
                        <div className="mx-auto col-10 col-md-8 col-lg-4">
                            <div className="text-center" style={{ marginTop: "100px" }}>
                                {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" width="30" height="24" /> */}
                                <button type="button" id="circular_button" class="btn btn-success btn-circle">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path>
                                    </svg>

                                </button>
                                <div className="text-center">

                                    <p style={{color:"black", fontSize:"20px"}}>Sign In</p>
                                </div>


                            </div>
                            <form className="form-floating" onSubmit={onSubmitHandler}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingInput">Email Address*</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mt-4" style={{ width: "100%", backgroundColor: "#3f51b5" }}>
                                    Login
                                </button>


                                <div className="form-floating mt-4">
                                    <Link className="nav-link active" aria-current="page" to="/signup"><u>Don't have an account? Sign up</u></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
