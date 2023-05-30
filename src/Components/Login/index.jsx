import { useForm } from 'react-hook-form';

import './styles.scss';


const Login = () => {

    const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
        console.log(data);
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
                    <button type='submit' className='submit-button'>Sign-in</button>
                </form>
            </section>
    )

    return content;
};

export default Login;