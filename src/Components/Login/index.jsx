import { useForm } from 'react-hook-form';

import './styles.scss';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../app/Features/auth/authAction'
import { useEffect } from 'react';

const Login = () => {
    const { loading, userInfo, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        // if (userInfo) {
        //   navigate('/user')
        // }
      }, [navigate, userInfo])
    

    const submitForm = (data) => {
        dispatch(loginUser(data));
    }

    const content = (
            <section className="login">
                <div className="login__header">
                <i className="fa-solid fa-circle-user"></i>
                <h1>Sing In</h1>
                </div>
                <form className="login__form" onSubmit={handleSubmit(submitForm)}>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email:
                        </label>
                        <input  
                            type="email" 
                            id="email"
                            {...register('email', { required: true })}
                        />
                    </div>               
                    <div className="form-group">
                        <label className="login__label" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="login__input"
                            type="password"
                            id="password"
                            {...register('password', { required: true })}
                        /> 
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">
                            Remember me
                        </label>
                     </div>
                    <button type='submit' className='submit-button'>
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>
            </section>
    );
    return content;
};

export default Login;