import React, { useState } from 'react'
import PropTypes from 'prop-types';
import logo from '../../assets/shoppingcart.png';


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
                        <img style={{ marginLeft: "10px", color: "#ffffff" }} src={logo} alt="logo" width="30" height="24" />
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