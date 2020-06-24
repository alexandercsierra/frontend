import React, { useState, useEffect } from 'react';
import '../components/SignUpForm.css'
import * as yup from 'yup';
import axios from 'axios';

export default function Form(){
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        username: '',
        consumer: '',
        terms: false
    })
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [post, setPost] = useState([]);
    // Yup validation and errors
    const formSchema = yup.object().shape({
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
        consumer: yup
        .string()
        .oneOf(['creator', 'student']),
        terms: yup
        .boolean()
        .oneOf([true])
    })
    useEffect(() => {
        formSchema.isValid(formState).then(isFormValid => {
            setButtonDisabled(!isFormValid)
        });
    }, [formState]);
    const [errors, setErrors]= useState({
        email: '',
        password: '',
        username: '',
        consumer: '',
        terms: ''
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
        axios
            .post('https://reqres.in/api/users', formState)
            .then(res => {
                setPost(res.data);
            })
        setFormState({
            email: '',
            password: '',
            username: '',
            consumer: '',
            terms: false
        })
    }
    return(
            <div className='form-wrapper'>
                <h1 className='title'>Create Account</h1>
                <p>Sign Up To Get Up To Date How-To Tutorials</p>
                <form className='form' onSubmit={onSubmit}>
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
                        <select 
                        className='text-boxes'
                        name='consumer'
                        onChange={inputChange}
                        >   
                        <option selected='true' disabled='disabled'>Select One</option>
                        <option value='creator'>Creator</option>
                        <option value='student'>Student</option>
                        </select>
                    <label htmlFor='terms-checkbox' className='terms-label'>By clicking the checkbox you agree to our <a href='#' className='tos'>Terms and Conditions</a>
                        <input 
                        type='checkbox' 
                        id='terms-checkbox'
                        name='terms'
                        checked={formState.terms}
                        onChange={inputChange} />
                    </label>
                    {errors.terms.length > 0 ? (<p className="error">{errors.terms}</p>) : null}
                    <button className='btn' disabled={buttonDisabled}>Sign Up</button>
                </form>
            </div>
    )
}