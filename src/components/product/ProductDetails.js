import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import { useLocation, useParams, useNavigate } from "react-router-dom"
import axios from "axios";



function ProductDetails(props) {

    //const [showSearch, setShowSearch] = useState(false);

    const { productId } = useParams()
    console.log(productId);
    console.log("PProductId " + productId);

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [availableItems, setAvailableItems] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [quantityToOrder, setQuantityToOrder] = useState("");


    /*let onSubmitHandler = (e) => {
         e.preventDefault();
         try {
 
             let res = await fetch("http://localhost:8080/api/orders", {
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
             console.log("APIResult: " + JSON.stringify(resJson));
             if (res.status === 200) {
                 <Header showSearch={true} />   
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
     };*/
    const navigate = useNavigate();
    const handleClick = (productId) => {
        console.log(quantityToOrder);
        if (quantityToOrder.trim().length !== 0) {
            console.log('input value is NOT empty');
        } else {
            alert('Please enter quantity');
            return;
        }
        navigate("/order-process/" + productId+"/"+quantityToOrder)

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
                <div className="row">
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
                            <span>   </span>
                            <span class="badge text-bg" style={{ backgroundColor: "#3f51b5", color: "white" }}>Available Quantity: {availableItems}</span>
                        </h4>
                        <div className="product_meta">
                            <span className="posted_in"> <strong>Category:</strong> <span>{category}</span></span>

                        </div>
                        <p className="mt-4">
                            {productDescription}
                        </p>

                        <div className="m-bot15  mt-4"> <span className="pro-price">  <h3 style={{ color: "red" }}>₹ {price}</h3></span></div>
                        <div className="form-group mt-4">
                            <label>Enter Quantity</label>
                            <input type="quantiy" placeholder="1" className="form-control quantity  mt-2" onChange={(e) => setQuantityToOrder(e.target.value)} />
                        </div>
                        <p className="mt-4">
                            <button className="btn btn-round mt-4" type="button" style={{ backgroundColor: "#3f51b5", color: "white" }} onClick={() => handleClick(productId)}>Place Order</button>
                        </p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ProductDetails
