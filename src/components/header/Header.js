import React, { useState } from 'react'
import PropTypes from 'prop-types';
import logo from '../../assets/cart_new.jpeg';


import {
    Link
} from "react-router-dom";
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';


export const Header = (props) => {

    var toShowSearch = true;
    var token = localStorage.getItem("token");
    if (token == null) {
        toShowSearch = false;
    }
    let { show1 } = props;
    console.log("toShowSearch show1" + show1);

    //const [showSearch, setShowSearch] = useState("");

    return (

        <div style={{ backgroundColor: "#3f51b5" }}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="collapse navbar-collapse">
                    <a className="navbar-brand" href="#">
                        {/* <img style={{ marginLeft: "10px", color: "#ffffff", filter: "brightness(100)" }} src={logo} alt="logo" width="30" height="24" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" style={{ marginLeft: "10px" }} height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                        </svg>
                    </a>
                    <a className="navbar-brand" style={{ fontSize: "16px", width: "40px" }} href="/">upGrad E-Shop</a>

                </div>

                <div className="collapse navbar-collapse" >

                    <form role="search" style={{ width: "100%" }}>
                        {show1 &&
                            <input className="form-control me-2 input-lg" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: "#5262bc", color: "#ffffff" }} />
                        }
                    </form>

                </div>


                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"><u>Home</u></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login"><u>Login</u></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/signup"><u>Sign Up</u></Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

Header.propTypes = {
    showSearch: PropTypes.bool
}


/*Header.defaultProps = {
    showSearch : false
}*/