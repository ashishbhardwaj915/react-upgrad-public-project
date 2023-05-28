import React, { Component } from 'react';
import axios from "axios";
import ProductCard from './ProductCard';
import CategoryButton from './CategoryButton';


export class Products extends Component {

    constructor() {
        super();
        this.state = {
            productList: [],
            categoryList: [],
            loading: false
        }
    }

    componentDidMount() {

        axios
            .get("http://localhost:8080/api/products")
            .then((response) => {
                if (response.status === 200) {
                    const responseStr = JSON.stringify(response)

                    var dataJson = JSON.parse(responseStr);

                    this.setState({ productList: dataJson.data });
                }
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://localhost:8080/api/products/categories")
            .then((response) => {
                if (response.status === 200) {
                    console.log("responseGET: Cat " + JSON.stringify(response.data));
                    const responseStr = JSON.stringify(response);

                    var dataJson = JSON.parse(responseStr);

                    this.setState({ categoryList: dataJson.data });
                }
            })
            .catch((error) => {
                console.log(error);
            });

        

    }


    render() {
        return (
            <>
                <div>
                    <div className="container">
                        <div>

                            <div className="row">
                                <div className="btn-group mt-2" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                    <label className="btn btn-outline-secondary" htmlFor="btnradio1">All</label>
                                    {this.state.categoryList.map((element) => {
                                        return <CategoryButton catName={element} key={element} />
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">

                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select..
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Default</a></li>
                                    <li><a className="dropdown-item" href="#">Price: High to Low</a></li>
                                    <li><a className="dropdown-item" href="#">Price: Low to High</a></li>
                                    <li><a className="dropdown-item" href="#">Newest</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="container mt-4">

                            <div className="row">
                                {
                                    this.state.productList.map((element) => {
                                        return <div className="col-md-4" key={element.id} >
                                            <ProductCard imageUrl={element.imageUrl}
                                                title={element.name} description={element.description} productId={element.id} />

                                        </div>


                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default Products;
