import React, { Component , useState } from 'react'

import pencilLogo from '../../assets/pencil.png';
import dustbinDelete from '../../assets/dustbin.png';

import ProductDetails from './ProductDetails';

import {
    useNavigate
} from "react-router-dom";


function ProductCard(props) {
    const navigate = useNavigate();
    const [data, setData] = useState("");

    const handleClick = (productId) => {
        
        //setData(productId); 
        navigate("/products-details/"+productId);
        console.log(productId);
        
    };

    let { title, description, imageUrl, productId } = props;
    return (
        <div className="my-4">
            
            <div className="card" style={{ width: "20rem" }} onClick={() => handleClick(productId)}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="row">
                    <div className="col-sm-6 card-body" >
                        {/* <Link to="/signup" className="btn stretched-link" style={{ backgroundColor: "#3f51b5", color: "#ffffff" }}>Buy</Link> */}
                        {/* <Link className="nav-link active" aria-current="page" ><u>Don't have an account? Sign up</u></Link> */}
                    </div>
                    <div className="col-sm-6 card-body text-end">
                        <img style={{ marginRight: "10px", color: "#ffffff" }} src={pencilLogo} alt="logo" width="24" height="24" />
                        <img style={{ marginRight: "10px", color: "#ffffff" }} src={dustbinDelete} alt="logo" width="30" height="24" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;

