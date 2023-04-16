import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../redux/slicers/productSlice'
import axios from 'axios'

const Table = (props) => {

    const navigate = useNavigate()
    // const dispatch = useDispatch()

    // const products = useSelector((state) => state.product.products)
    const [products, setProducts] = useState([])
    // const [fetchProducts, setFetchProducts] = useState(false)

    useEffect(() => {
        const url = 'https://64324f7c3e05ff8b3723fd16.mockapi.io/products'
        axios.get(url)
        .then((res) => {
            setProducts(res.data)
            // console.log(products);
        })
        .catch((err) => {
            console.log(err);
        })
    },[products])

    const handleEdit = (id) => {
        const item = products.find((item) => item.id === id);
        props.setForm(item)
    }

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            // dispatch(deleteProduct(id))
            deleteProduct(id)
            // setFetchProducts(true)
        }
    }

    async function deleteProduct(id){
        // console.log(id);
        try{
            const deleteProduct = await axios.delete(`https://64324f7c3e05ff8b3723fd16.mockapi.io/products/${id}`)
            alert('Product deleted successfully')
        }catch (error){
            alert(error.message)
        }
    }

    const handleRowClick = (id) => {
        const item = products.find((item) => item.productID === id);
        navigate(`/product/${item.productID}`)
    }

    return (
        <>
            <section className="container-fluid  mb-5">
                <h1 className="text-center">List Product</h1>
                <table className="table table-striped w-75">
                    <thead>
                        <tr>
                        {props.thead.map((item, index) =>{
                            return (
                                <th key={index}>{item}</th>
                            )
                        })}
                        </tr>
                    </thead>
                    <tbody id="listProduct">
                        {products?.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td onClick={() => handleRowClick(item.productID)}>{item.productID}</td>
                                    <td onClick={() => handleRowClick(item.productID)}>{item.productName}</td>
                                    <td onClick={() => handleRowClick(item.productID)}>{item.productCategory}</td>
                                    <td onClick={() => handleRowClick(item.productID)}>{item.productFreshness}</td>
                                    <td onClick={() => handleRowClick(item.productID)}>{item.productPrice}</td>
                                    <td onClick={() => handleRowClick(item.data.productID)}>
                                        <img src={item.productImg} alt={item.productImg} width={200}/>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="mb-3 mt-4 w-25">
                    <input type="text" id="searchKey" className="form-control" placeholder="Search by product name" />
                </div>
                <input className="btn btn-primary" id="deletion" type="reset" defaultValue="Deletion" />
                <button type="button" className="btn btn-outline-primary" id="search">Search</button>
            </section>
        </>
    )
}

export default Table