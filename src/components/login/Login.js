import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './login.css';
import * as axios from 'axios'

const Login = (props) => {
    const initUser = {
        username: "",
        password: ""
    }
    const [user, setUser] = useState(initUser);

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user, [name]: value });
     
    }

    const handleUser = e => {   
        e.preventDefault();
        axios.get(`http://localhost:3500/user?username=${user.username}`).then(res => {
            if (res.data[0].password === user.password) props.history.push("/admin/student")
            else window.location.reload();
        });
    }


    return (
        <div className="wrapper">
            <div className="login">
                <form onSubmit={handleUser}>
                    <h1>Login</h1>
                    <div className="input">
                        <span className="text">Username</span>
                        <i className="far fa-user i-login"></i>
                        <input type="text" name="username" onChange={handleChangeInput} placeholder="Type your username" />    
                    </div>
                    <div className="input">
                        <span className="text">Password</span>
                        <i className="fas fa-lock i-login"></i>
                        <input type="password" name="password" onChange={handleChangeInput} placeholder="Type your password" />
                    </div>
                    <div className="getPass">
                        <Link to="#" className="forget">Forget password?</Link>
                    </div>
                    <div className="button-form">
                        <button className="submit"type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Login);