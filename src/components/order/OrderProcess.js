import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import { useLocation, useParams } from "react-router-dom"
import axios from "axios";
import logo from '../../assets/OrderDetails.png';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";

function OrderProcess(props) {

    const { productId, quantityToOrder } = useParams()
    console.log(productId);
    console.log("  Pooo oproductId " + productId);
    console.log("  Pooo Quantity " + quantityToOrder);

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [availableItems, setAvailableItems] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    //const [quantityToOrder, setQuantityToOrder] = useState("");
    const navigate = useNavigate();
    const onBackClick = (productId) => {
        navigate(-1);

    };

    const onNextClick = (productId) => {
        navigate("/select-address/" + productId+"/"+quantityToOrder);

    };

    useEffect(() => {

        axios
            .get("http://localhost:8080/api/products/" + productId)
            .then((response) => {
                if (response.status === 200) {
                    const responseStr = JSON.stringify(response)

                    var dataJson = JSON.parse(responseStr);
                    console.log("Response ProductID" + JSON.stringify(dataJson.data));
                    setProductName(dataJson.data.name);
                    setProductDescription(dataJson.data.description);
                    setAvailableItems(dataJson.data.availableItems);
                    setCategory(dataJson.data.category);
                    setPrice(dataJson.data.price);
                    setImageUrl(dataJson.data.imageUrl);
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
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="pro-img-details">
                            <img src={imageUrl} alt="" width="450px" height="450px" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pro-d-title">
                            <span href="#" className="header">
                                {productName}
                            </span>


                        </h4>
                        <div className="product_meta">
                            <span className="posted_in"> Quantity:<span>{quantityToOrder}</span></span>

                        </div>
                        <div className="product_meta">
                            <span className="posted_in"> Category: <strong><span>{category}</span></strong></span>

                        </div>
                        <p className="mt-4">
                            {productDescription}
                        </p>

                        <div className="m-bot15  mt-4"> <span className="pro-price">  <h3 style={{ color: "red" }}>Total Price: ₹ {price}</h3></span></div>
                        {/* <div className="form-group mt-4">
                            <label>Enter Quantity</label>
                            <input type="quantiy" placeholder="1" className="form-control quantity  mt-2" onChange={(e) => setQuantityToOrder(e.target.value)} />
                        </div> */}
                        <p style={{ marginTop: "180px" }}>
                            <button className="btn btn-round m-4" type="button" style={{ backgroundColor: "#3f51b5", color: "white" }} onClick={() => onBackClick(productId)}>Back</button>
                            <button className="btn btn-round m-4" type="button" style={{ backgroundColor: "#3f51b5", color: "white" }} onClick={() => onNextClick(productId)}>Next</button>
                        </p>
                    </div>

                </div>

            </div>

        </>
    )
}
export default OrderProcess
