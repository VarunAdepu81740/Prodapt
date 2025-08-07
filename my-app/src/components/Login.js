import { Link } from 'react-router-dom';
import '../styles/login.css'

function Login() {
    return (
        <div className="container">
            <h3>Login Form</h3>
            <div className="form-group">
                User Name : <input type="text" className="form-control" placeholder="Enter your Username"></input>
                <br></br>
                Password : <input type="password" className="form-control" placeholder="Enter your password"></input>
                <br></br>
                <button type="button" className="btn btn-primary">Login</button>
                <p>Don't Have an account? <Link to="#">Sign Up</Link></p>
            </div>
        </div>
    )
}
export default Login;