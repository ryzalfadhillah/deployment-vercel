import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=> {

    const menuItems = [
        {
            text: 'Home',
            path: '/',
        },
        {
            text: 'Product',
            path: '/product'
        },
        {
            text: 'Login',
            path: '/login'
        },
        {
            text: 'Register',
            path: '/register'
        }
    ]
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow">
            <div className="container-fluid mx-2">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {menuItems?.map((menuItem, index) => {
                        return(
                            <Link to={menuItem.path} key={index} className="nav-link text-main mx-2">{menuItem.text}</Link>
                        )
                    })}
                </div>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar