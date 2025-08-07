import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: "100px", height: "auto", display: "inline-block" }}
                        />
                    </Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/Aboutus">About Us</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </div>

        </nav>
    )
}
export default Navbar;