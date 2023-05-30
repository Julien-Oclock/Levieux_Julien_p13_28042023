import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Login from '../../Components/Login';

import './styles.scss';

const SignIn = () => {

    return (
        <div>
            <Header />
            <section className="login-container">
                <Login />
            </section>
            <Footer />
        </div>
    )
};

export default SignIn;