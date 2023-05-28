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
                            <div className="text-center" style={{ margin: "20px" }}>
                                <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" width="30" height="24" />
                            </div>
                            <div visibility="hidden" style={{ visibility: "hidden" }} >
                                <Header visibility="hidden" show1={showSearch} />
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


                                <div className="form-floating">
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
