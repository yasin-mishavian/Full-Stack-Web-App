import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import Input from './Input/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { AUTH } from '../../redux/auth/type';
import { signin, signup } from '../../redux/auth/action';
import './Auth.scss';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Form = () => {
  
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode = () => {
    setIsSignup((IsSignup) => !IsSignup);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        dispatch(signup(form, navigate));
      } else {
        dispatch(signin(form, navigate));
      }
    } catch (error) {
      alert('error')
    }

  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/');
    } catch (error) {
      alert('error')
    }
  };

  const googleError = () => {
    alert('Google Sign In was unsuccessful. Try again later');
    window.location.reload();
  }

  return (
    <div className='auth'>
      <div className='form-box'>
        { !isSignup && (
          <div className='lockIcon'><i className="fa-solid fa-lock"></i></div>
        )}
        <h3>{ isSignup ? 'Sign up' : 'Sign in' }</h3>
        <form className='form-control' onSubmit={handleSubmit}>
          { isSignup && (
          <div className='signup-input'>
            <Input name={'firstName'} className='input-name' type={'text'} label={'First Name'} placeholder={'Name'} handleChange={handleChange} />
            <Input name={'lastName'} className='input-family' type={'text'} label={'Last Name'} placeholder={'Family'} handleChange={handleChange} />
          </div>
          )}
          <Input name={'email'} type={'email'} label={'Email Address'} placeholder={'Email'} handleChange={handleChange} />
          <Input name={'password'} type={'password'} label={'Password'} placeholder={'Password'} handleChange={handleChange} />
          { isSignup && <Input name={'confirmPassword'} type={'password'} placeholder={'Repeat'} label={'Repeat Password'} handleChange={handleChange} /> }

          <button className='sign-btn' type="submit" >{ isSignup ? 'Sign Up' : 'Sign In' }</button>
          <GoogleLogin
              clientId="564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com"
              render={(renderProps) => (
                <button className='google-btn'  onClick={renderProps.onClick}  >
                  <span><i className="fa-brands fa-google"></i></span>Google Sign In
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
          <Link to='/'>
            <button className='home-btn' >Go Home</button>
          </Link>
          <button onClick={switchMode} className='Signin-btn'>
            { isSignup ? 'Already have an account ? Sign in' : "Don't have an account ? Sign Up" }
            &nbsp;<span> <i className="fa-solid fa-arrow-right"></i> </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;