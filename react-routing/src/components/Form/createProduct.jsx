import React, { useEffect, useState } from 'react'
import Input from '../../elements/Input'
import TextArea from '../../elements/TextArea'
import Dropdown from '../../elements/Dropdown'
import Select from '../../elements/OptionSelect'
import Table from '../Table'
import {v4 as uuidv4} from 'uuid'
import ErrorMessage from '../../elements/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, updateProduct } from '../../redux/slicers/productSlice'
import axios from 'axios'

const Form = (props) => {
    // const dispatch = useDispatch()
    // const products = useSelector((state) => state.product.products)

    const [products, setProducts] = useState([])
    const [fetchProducts, setFetchProducts] = useState(false)

    const dropdown = ['Volvo', 'Saab', 'Mercedes', 'Audi', 'Truck Tronton']
    const options = ['Brand New', 'Second Hand', 'Refurbished']
    const thead = ['No', 'Product Name', 'Product Category', 'Product Freshness', 'Product Price', 'Product Image','Action']

    useEffect(() => {
        axios.get(`https://64324f7c3e05ff8b3723fd16.mockapi.io/products`)
        .then((res) => {
            // console.log(res.data);
            setProducts(res.data)
            // console.log(products);
            setFetchProducts(false)
        })
        .catch((err) => {
            alert(err.message);
        })
        setFetchProducts(false)
    },[fetchProducts])

    const [data, setData] = useState({
        id: '',
        productID: uuidv4(),
        productName: '',
        productCategory: '',
        productImg: '',
        productFreshness: '',
        productDescription: '',
        productPrice:''
    })

    const [error, setError] = useState('')
    const [prevImg, setPrevImg] = useState('')

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        let setState = true
        let testRegex = true

        if(name == "productName"){
            const productNameRegex = /^[^@/#{}]*$/;
            if(!productNameRegex.test(value)){
                setError('Product Name must not contain symbols.');
                testRegex = false
            }else if(value.length > 25){
                setError('Product names cannot be more than 25');
                setState = false
            }else{
                setError('')
            }
        }

        if(name == 'productImg'){
            value = e.target.files[0]
            if(value && value.type.match('image.*')){
                setPrevImg(value)
            }else{
                alert('Please select an image file (jpg, png, gif).')
                setPrevImg('')
                e.target.value = null
            }
            value = e.target.value
        }

        if(setState && testRegex){
            setData({...data, [name]: value})
        }
    }

    const resetForm = () => {
        setData({
            productID: uuidv4(),
            productName: '',
            productCategory: '',
            productImg: '',
            productFreshness: '',
            productDescription: '',
            productPrice:''
        })
        setPrevImg('')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(window.confirm('Are you sure you want to submit?')){
            const dataIndex = products.findIndex(item => item.productID === data.productID)
            
            if (dataIndex === -1) {
                // dispatch(addProduct(data))
                axios.post('https://64324f7c3e05ff8b3723fd16.mockapi.io/products',{
                        productID: data.productID,
                        productName: data.productName,
                        productCategory: data.productCategory,
                        productImg: data.productImg,
                        productFreshness: data.productFreshness,
                        productDescription: data.productDescription,
                        productPrice: data.productPrice
                    }
                )
                .then((res) => {
                    alert('Product added')
                    setFetchProducts(true)
                })
                .catch((err) => {
                    alert(err.message)
                })
            } else {
                // console.log(data.id);
                axios.put(`https://64324f7c3e05ff8b3723fd16.mockapi.io/products/${data.id}`,{
                        productID: data.productID,
                        productName: data.productName,
                        productCategory: data.productCategory,
                        productImg: data.productImg,
                        productFreshness: data.productFreshness,
                        productDescription: data.productDescription,
                        productPrice: data.productPrice,
                        id: data.id
                    }
                )
                .then((res) => {
                    alert('Product Edited Succesfully')
                    setFetchProducts(true)
                })
                .catch((err) => {
                    alert(err.message)
                })
                // const editProduct = [...products]
                // editProduct.splice(dataIndex, 1, data)
                // dispatch(updateProduct(editProduct))
            }
            resetForm()
        }        
    }

    return (
        <>
            <form className="mx-auto w-600 mt-3" onSubmit={handleSubmit}>
                <h3>{props.title}</h3>
                <Input
                    label={'Product Name'}
                    name={'productName'}
                    id={'productName'}
                    type={'text'}
                    placeholder={'Product Name...'}
                    onChange={handleInput}
                    value={data.productName}
                />
                <small className="text-danger">{error}</small>
                {!data.productName &&
                    <ErrorMessage message={'Product name must be field in'} />
                }

                <Dropdown
                    label={'Product Category'}
                    name={'productCategory'}
                    option= {dropdown}
                    onChange={handleInput}
                    value={data.productCategory}
                />
                {!data.productCategory &&
                    <ErrorMessage message={'Product category must be choosen'} />
                }

                <Input 
                    label={'Image of Product'}
                    name={'productImg'}
                    type='file'
                    onChange={handleInput}
                    // value={data.productImg}
                />
                {!data.productImg &&
                    <ErrorMessage message={'Product image must be choosen'} />
                }
                {prevImg &&
                    <img src={window.URL.createObjectURL(prevImg)} width={200} alt='preview image' />
                }

                <Select 
                    label={'Product Freshness'}
                    name={'productFreshness'}
                    option={options}
                    onChange={handleInput}
                    value={data.productFreshness}
                />
                {!data.productFreshness &&
                    <ErrorMessage message={'Product freshness must be select'} />
                }

                <TextArea 
                    label={'Additional Description'}
                    name={'productDescription'}
                    placeholder={'Description...'}
                    onChange={handleInput}
                    value={data.productDescription}
                />
                {
                    !data.productDescription && 
                    <ErrorMessage message={'Product description must be field in'} />
                }

                <Input 
                    label={'Product Price'}
                    name={'productPrice'}
                    type={'number'}
                    placeholder={'$0'}
                    onChange={handleInput}
                    value={data.productPrice}
                />
                {!data.productPrice &&
                    <ErrorMessage message={'Product price must be field in'} />
                }
                

                <br /><br />
                <div className="mt-5 mb-5 w100 text-center">
                    <button type="submit" className="btn btn-primary w-75" id="submitButton" disabled={!data.productName || !data.productCategory || !data.productImg || !data.productFreshness || !data.productDescription || !data.productPrice}>
                    Submit
                    </button>
                </div>
            </form>
            <Table 
                thead = {thead}
                setForm={setData}
            />
        </>
    )
}

export default Form