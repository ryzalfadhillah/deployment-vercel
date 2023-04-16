import React from 'react'
import Form from '../../components/Form/createProduct'
import HeroSection from '../../components/HeroSection'
import Navbar from '../../components/Navbar'
import RandomNumberGenerotor from '../../components/RandomNumber'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const CreateProduct = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem('isLoggedIn');
        
        if (login == null) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <Navbar />
            <HeroSection />
            <RandomNumberGenerotor />
            <Form 
                title = {'Detail Product'}
            />
        </>
    )
}

export default CreateProduct