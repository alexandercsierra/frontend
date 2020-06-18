import React, { useState } from 'react';
import '../components/Form.css'

export default function Form(){
    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        username: ''
    })
    const inputChange = e => {
        console.log(e.target.name)
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    console.log('formstate name', formState.email)
    const onSubmit = e => {
        e.preventDefault();
        setFormState({
            name: '',
            email: '',
            password: '',
            username: ''
        })
    }
    return(
            <div className='form-wrapper'>
                <h1 className='title'>Create Account</h1>
                <p>Sign Up To Get Up To Date How-To Tutorials</p>
                <form className='form' onSubmit={onSubmit}>
                    <label className='label' htmlFor='first-name'>
                        <input
                        className='text-boxes' 
                        type='text' 
                        name='first_name'
                        id='first-name'
                        placeholder='First Name'
                        value={formState.name}
                        onChange={inputChange}/>
                    </label>
                    <label className='label' htmlFor='last-name'>
                        <input 
                        className='text-boxes'
                        type='text' 
                        name='last_name'
                        id='last-name'
                        placeholder='Last Name'
                        value={formState.name}
                        onChange={inputChange}/>
                    </label>
                    <label className='label' htmlFor='email'>
                        <input 
                        className='text-boxes'
                        type='email' 
                        name='email'
                        id='email'
                        placeholder='Email Address'
                        value={formState.email}
                        onChange={inputChange}/>
                    </label>
                    <label className='label' htmlFor='password'>
                        <input 
                        className='text-boxes'
                        type='password' 
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={formState.password}
                        onChange={inputChange}/>
                    </label>
                    <label className='label' htmlFor='username'> 
                        <input 
                        className='text-boxes'
                        type='text' 
                        name='username'
                        id='username'
                        placeholder='Username'
                        value={formState.username}
                        onChange={inputChange}/>
                    </label>
                    <label htmlFor='terms-label' className='terms-label'>By clicking the checkbox you agree to our <a href='#' className='tos'>Terms and Conditions</a>
                        <input 
                        type='checkbox' 
                        id='terms-label' />
                    </label>
                    <button className='btn'>Sign Up</button>
                </form>
            </div>
    )
}