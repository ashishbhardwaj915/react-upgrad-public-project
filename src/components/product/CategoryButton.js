import React, { Component } from 'react'

export class CategoryButton extends Component {
    render() {
        let { catName } = this.props;
        return (

            <>
            <input type="radio" className="btn-check" name="btnradio" id={catName} autoComplete="off" />
                                    <label className="btn btn-outline-secondary" htmlFor={catName}>{catName}</label>
            
            </>
        )
    }
}

export default CategoryButton