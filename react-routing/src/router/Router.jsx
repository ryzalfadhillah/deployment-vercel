import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateProduct from '../pages/createProduct/CreateProduct'
import LandingPage from '../pages/landingPage'
import NotFound from '../components/NotFound'
import DetailProduct from '../pages/detailProduct'
import LoginPage from '../pages/loginPage'
import Register from '../pages/registerPage'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path='/'
                        element={<LandingPage />}
                    />
                    <Route 
                        path='/product'
                        element={<CreateProduct />}
                    />
                    <Route 
                        path='/product/:id'
                        element={<DetailProduct />}
                    />
                    <Route 
                        path='/login'
                        element={<LoginPage />}
                    />
                    <Route 
                        path='/register'
                        element={<Register />}
                    />
                    <Route 
                        path='*'
                        element={<NotFound />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router