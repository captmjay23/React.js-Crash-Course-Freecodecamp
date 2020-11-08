import React from 'react'


const SchoolProduct = (props) => {

    return (
        <div className="product col-xl col-lg col-md col-sm">
            <div className="school-product card my-sm-3 my-3">
                <div className="product-info card-body">
                    <div className="card-title">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="card-text">
                        <p>{props.price}.00 PHP</p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolProduct