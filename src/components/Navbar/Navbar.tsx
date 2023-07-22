import UserService from "../../services/userServices";
import Button from "../Button";

export default function Navbar() {
    function goToLoginPage() {
        document.location.href = '/login';
    }

    function goToRegisterPage() {
        document.location.href = '/register';
    }

    function logout() {
        UserService.logout();
    }

    return <nav>
        <h1 onClick={() => document.location.href = '/'}>Katagen</h1>
        {UserService.isLoggedIn()
            ? <Button label={'Se déconnecter'} handleClick={logout} />
            : <div>
                <Button label={'S\'inscrire'} handleClick={goToRegisterPage} />
                <Button label={'Se connecter'} handleClick={goToLoginPage} />
            </div>
        }
    </nav>
}