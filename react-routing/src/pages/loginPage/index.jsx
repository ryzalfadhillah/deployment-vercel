import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Input from '../../elements/Input'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [account, setAccount] = useState({
        email: 'admin@gmail.com',
        password: '12345678'
    })
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if(name == 'email') {
            const regex = /\S+@\S+\.\S+/;
            if(!value.trim()){
                setEmailError('Email must be field in')
            }else if(!regex.test(value)){
                setEmailError('Invalid email format')
            }else{
                setEmailError('')
            }
        }else{
            if(value.length == 0) {
                setPasswordError('Password must be field in')
            }else if(value.length < 8 && value.length >0){
                setPasswordError('Password must be at least 8 characters')
            }else{
                setPasswordError('')
            }
        }
        
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!emailError.length > 0 && !passwordError.length > 0) {
            if(data.email == account.email && data.password == account.password) {
                alert('Login success')
                localStorage.setItem('user', JSON.stringify(account));
                localStorage.setItem('isLoggedIn', true);
                resetForm()
                navigate('/product')
            }else{
                alert('Email or password incorrect')
            }
        }
    }

    const resetForm = () => {
        setData({
            email: '',
            password: ''
        })
    }

    return ( 
        <>
            <Navbar />
            <div className="mx-auto w-600 border mt-5 p-3 rounded">
                <h1 className="text-primary">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                        <Input 
                            label={'Email*'}
                            name={'email'}
                            type={'text'}
                            value={data.email}
                            placeholder={'Email'}
                            onChange={handleChange}
                        />
                        {emailError && <small id="emailHelp" className="form-text text-danger">{emailError}</small>}
                    </div>
                    <div className="form-group mt-3">
                        <Input 
                            label={'Password*'}
                            name={'password'}
                            type={'password'}
                            value={data.password}
                            placeholder={'Password'}
                            onChange={handleChange}
                        />
                        {passwordError && <small id="emailHelp" className="form-text text-danger">{passwordError}</small>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </>
    );
}

export default LoginPage