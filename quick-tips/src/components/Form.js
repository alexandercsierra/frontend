import React, { useState } from 'react';
import '../components/Form.css'
import * as yup from 'yup';

export default function Form(){
    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        username: '',
        terms: false
    })
    const [post, setPost] = useState([]);
    // Yup validation and errors
    const formSchema = yup.object().shape({
        first_name: yup
        .string()
        .required('This field is required'),
        last_name: yup
        .string()
        .required('This field is required'),
        email: yup
        .string()
        .email('Must be a valid email address')
        .required('This field is required'),
        password: yup
        .string()
        .min(8, 'Password needs to be at least 8 characters')
        .required('This field is required'),
        username: yup
        .string()
        .required('This field is required'),
        terms: yup
        .boolean()
        .oneOf([true])
    })
    const [errors, setErrors]= useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        username: '',
        terms: false
    })
    const validation = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.name === 'terms' ? e.target.checked : e.target.value)
        .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: ''
            })
        })
        .catch(err => {
            setErrors({...errors,
            [e.target.name]: err.errors[0]
         })
        })
    }
    // Dynamic Change
    const inputChange = e => {
        e.persist();
        let checkboxVal = true;

        if (e.target.name === "terms") {
            checkboxVal = e.target.checked;
            console.log('check', e.target.checked)
        } else {
            checkboxVal = formState.terms;
        }
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
        const newFormData = {
            ...formState,
            terms: checkboxVal,
            [e.target.name]:
              e.target.name === "terms" ? e.target.checked : e.target.value // // remember value of the checkbox is in "checked" and all else is "value"
          };
      
          validation(e); // for each change in input, do inline validation
          setFormState(newFormData);
    }
    
    const onSubmit = e => {
        e.preventDefault();
        setFormState({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            username: '',
            terms: false
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
                        value={formState.first_name}
                        onChange={inputChange}/>
                    </label>
                    {errors.first_name.length > 0 ? (<p className="error">{errors.first_name}</p>) : null}
                    <label className='label' htmlFor='last-name'>
                        <input 
                        className='text-boxes'
                        type='text' 
                        name='last_name'
                        id='last-name'
                        placeholder='Last Name'
                        value={formState.last_name}
                        onChange={inputChange}/>
                    </label>
                    {errors.last_name.length > 0 ? (<p className="error">{errors.last_name}</p>) : null}
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
                    {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
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
                    {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
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
                    {errors.username.length > 0 ? (<p className="error">{errors.username}</p>) : null}
                    <label htmlFor='terms-checkbox' className='terms-label'>By clicking the checkbox you agree to our <a href='#' className='tos'>Terms and Conditions</a>
                        <input 
                        type='checkbox' 
                        id='terms-checkbox'
                        name='terms' />
                    </label>
                    {errors.terms.length > 0 ? (<p className="error">{errors.terms}</p>) : null}
                    <button className='btn'>Sign Up</button>
                </form>
            </div>
    )
}