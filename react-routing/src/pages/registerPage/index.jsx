import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navbar from '../../components/Navbar'

const Register = () => {
    const handleSubmit = (value) => {
        alert(`Welcome ${value.firstName} ${value.lastName}`)
        setTimeout(() => {
            formik.resetForm();
        }, 2000);
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName:Yup.string()
                .required()
                .min(3, 'First name must be at least 3 characters'),
            lastName: Yup.string()
                .required()
                .min(3, 'Last name must be at least 3 characters'),
            username: Yup.string()
                .required(),
            email: Yup.string()
                .required()
                .email('Invalid email format'),
            password: Yup.string()
                .required()
                .min(8, 'Password must be at least 8 characters'),
            confirmPassword: Yup.string()
                .required()
                .oneOf([Yup.ref('password')], 'Password not match')
        }),
        onSubmit: handleSubmit
    })


    return ( 
        <>
            <Navbar />
            <div className="mx-auto w-600 border mt-5 p-3 rounded">
                <h1 className="text-primary">Register</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text"    
                            className="form-control" 
                            id="firstName"
                            name="firstName"  
                            placeholder="Enter your first name" 
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName && <small className="form-text text-danger">{formik.errors.firstName}</small>}
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Last Name</label>
                        <input 
                            type="text"    
                            className="form-control" 
                            id="lastName"
                            name="lastName"  
                            placeholder="Enter your last name" 
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName && <small className="form-text text-danger">{formik.errors.lastName}</small>}
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Username</label>
                        <input 
                            type="text"    
                            className="form-control" 
                            id="username"  
                            name="username" 
                            placeholder="Enter username" 
                            {...formik.getFieldProps('username')}
                        />
                        {formik.touched.username && formik.errors.username && <small id="emailHelp" className="form-text text-danger">{formik.errors.username}</small>}
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Email address</label>
                        <input 
                            type="text"    
                            className="form-control" 
                            id="email"  
                            name="email" 
                            placeholder="Enter email" 
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email && <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small>}
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Password</label>
                        <input 
                            type="password"    
                            className="form-control" 
                            id="password"
                            name="password"  
                            placeholder="Enter Spassword" 
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password && <small id="emailHelp" className="form-text text-danger">{formik.errors.password}</small>}
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Confirm Password</label>
                        <input 
                            type="password"    
                            className="form-control" 
                            id="confirmPassword"
                            name="confirmPassword"  
                            placeholder="Enter confirm password" 
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && <small id="emailHelp" className="form-text text-danger">{formik.errors.confirmPassword}</small>}
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Register