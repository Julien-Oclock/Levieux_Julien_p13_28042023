import {UseRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../../Layouts/AuthSlice';

const Login = () => {

    const useRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [login , { isLoading }] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        useRef.current.focus();
    }, []);

    useEffect(() => {

    }, [user, password]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userData = await login({user, password}).unwrap();
            console.log(userData);
            dispatch(login({...userData, user}));
            setUser('');
            setPassword('');
            navigate('/dashboard');
        } catch (error) {
            setError(error.data.message);
            console.log(error.data.message);
            errRef.current.focus();
        }
    }

    const handleMailInput = (e) => setUser(e.target.value);

    const handlePasswordInput = (e) => setPassword(e.target.value);

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <form className="login__form" onSubmit={handleLogin}>
                <h1 className="login__title">Sign In</h1>
                <label className="login__label" htmlFor="email">
                    Email:
                </label>
                <input 
                    className="login__input" 
                    type="email" 
                    id="email" 
                    ref={useRef} 
                    value={user} 
                    onChange={handleMailInput} 
                    autoComplete='off' 
                />
                <label className="login__label" htmlFor="password">
                    Password:
                </label>
                <input
                    className="login__input"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordInput}
                    autoComplete='off'
                /> 
            </form>
        </section>
    )

    return content;
};

export default Login;