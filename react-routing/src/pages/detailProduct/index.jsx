import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const DetailProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = 'https://64324f7c3e05ff8b3723fd16.mockapi.io/products'
        axios.get(url)
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[products])


    const { id } = useParams()

    return (
        <>
            { products?.filter(product => product.productID === id).map((product) => {
                return (
                    <div key={product.productID} className="card mx-auto m-5" style={{width: '40rem'}}>
                        <div className="card-body text-center">
                            {/* <img src={window.URL.createObjectURL(location.state.productImg)} alt="Product Image" width={400} /> */}
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">ID : {product.productID}</p>
                            <p className="card-text">{product.productDescription}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Category : {product.productCategory}</li>
                            <li className="list-group-item">Freshness : {product.productFreshness}</li>
                            <li className="list-group-item">Price : ${product.productPrice}</li>
                        </ul>
                        <div className="card-body">
                            <Link to='/product' className="btn btn-primary">Back</Link>
                        </div>
                    </div>
                )
            }) }
            
        </>
    )
}

export default DetailProduct