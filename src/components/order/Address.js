import React, { useEffect, useState } from 'react'

import logo from '../../assets/Address.png';
import axios from "axios";
import {
    BrowserRouter as Router,
    Link,
    useNavigate,
    useParams
} from "react-router-dom";


function Address() {



    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [state, setState] = useState("");
    const [landmark, setLandmark] = useState("");

    const token = localStorage.getItem("token", null);


    let onSubmitHandler = async (e) => {

        e.preventDefault();
        try {

            let res = await fetch("http://localhost:8080/api/addresses", {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    city: city,
                    landmark: landmark,
                    street: street,
                    contactNumber: contactNumber,
                    state: state,
                    zipcode: zipCode,
                }),
            });
            let resJson = await res.json();
            console.log("APIResult: SignUp" + JSON.stringify(resJson));
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


    const { productId, quantityToOrder } = useParams();

    const navigate = useNavigate();
    const onBackClick = (productId) => {
        navigate(-1);

    };

    const onNextClick = (productId) => {
        navigate("/select-address/" + productId + "/" + quantityToOrder);

    };

    
    useEffect(() => {

        axios
            .get("http://localhost:8080/api/addresses", { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {
                if (response.status === 200) {
                    const responseStr = JSON.stringify(response)

                    var dataJson = JSON.parse(responseStr);
                    console.log("Response ProductID" + JSON.stringify(dataJson.data));
                    // setProductName(dataJson.data.name);
                    // setProductDescription(dataJson.data.description);
                    // setAvailableItems(dataJson.data.availableItems);
                    // setCategory(dataJson.data.category);
                    // setPrice(dataJson.data.price);
                    // setImageUrl(dataJson.data.imageUrl);
                }
            })
            .catch((error) => {
                console.log(error);
            });


    });


    return (
        <>
            <div className="container mt-4">

                <div className="row mt-4">
                    <div className="col-md-12">

                        <img src={logo} alt="logo" width="100%" />

                    </div>

                </div>

                <div className="row text-center">
                    <div className="col-md-12">

                        <div class="dropdown">
                            <a class="btn btn-light dropdown-toggle" style={{ width: "500px" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select...
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" style={{ width: "500px" }}>Action</a></li>
                                <li><a class="dropdown-item" href="#" style={{ width: "500px" }}>Another action</a></li>
                                <li><a class="dropdown-item" href="#" style={{ width: "500px" }}>Something else here</a></li>
                            </ul>
                        </div>


                    </div>


                </div>

                <div className="row mt-4">
                    <div className="mx-auto col-10 col-md-8 col-lg-4">
                        <h6 className="text-center">OR</h6>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="mx-auto col-10 col-md-8 col-lg-4">
                        <h5 className="text-center">Add Address</h5>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="mx-auto col-10 col-md-8 col-lg-4">

                        <form className="form-floating" onSubmit={onSubmitHandler}>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="floatingInput">Name*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Password" onChange={(e) => setContactNumber(e.target.value)} />
                                <label htmlFor="floatingInput">Contact Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setStreet(e.target.value)} />
                                <label htmlFor="floatingPassword">Street</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setCity(e.target.value)} />
                                <label htmlFor="floatingInput">City</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="name" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setState(e.target.value)} />
                                <label htmlFor="floatingInput">State</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" id="floatingInput" className="form-control  mb-3" placeholder="Password" onChange={(e) => setLandmark(e.target.value)} />
                                <label htmlFor="floatingPassword">Landmark</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" id="floatingInput" className="form-control  mb-3" placeholder="Password" onChange={(e) => setZipCode(e.target.value)} />
                                <label htmlFor="floatingPassword">ZipCode</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-3" style={{ width: "100%", backgroundColor: "#3f51b5" }}>
                                Save Address
                            </button>

                        </form>



                    </div>


                </div>

                <div className="row mt-4">
                    <div className="mx-auto col-10 col-md-8 col-lg-4 text-center">

                    <button className="btn btn-light btn-round m-4" type="button"  onClick={() => onBackClick(productId)}>Back</button>
                            <button className="btn btn-round m-4" type="button" style={{ backgroundColor: "#3f51b5", color: "white" }} onClick={() => onNextClick(productId)}>Next</button>

                    </div>
                </div>


            </div>

        </>
    )
}

//

export default Address