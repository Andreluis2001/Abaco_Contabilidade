import logo from '../images/logo4.png';
import '../styles/style.css';
import LoginForm from '../components/LoginForm';

type Props = {};

function LoginPage({}: Props) {
    return (
        <>
            <div className="login-container">
                <div className="login-content login-first-content">
                    <div className="login-first-column">
                        <img src={logo} className="login-side-image" alt="Logo Ábaco" />
                        <h2 className="login-title login-title-primary">Bem-vindo de volta!</h2>
                        <p className="login-description login-description-primary">Acesse sua conta.</p>
                    </div>
                    <div className="login-second-column">
                        <h2 className="login-title login-title-second">Faça seu login!</h2>
                        <p className="login-description login-description-second">Preencha seus dados</p>
                        <LoginForm /> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;