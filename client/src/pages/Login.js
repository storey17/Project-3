import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './Login.css';

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // When the form is submitted, we validate there's an email and password entered
    handleFormSubmit = event => {
        event.preventDefault();

        var userData = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        this.loginUser(userData.email, userData.password);
        this.setState({ email: "" });
        this.setState({ password: "" });
    };

    // loginUser does a post to our "api/login" route and if successful, redirects us to the the members/podcasts page
    loginUser(email, password) {
        return axios.post("/api/login", { email, password })
            .then(function (data) {
                console.log(data);
                window.location.replace("/podcasts");
            })
            // If there's an error, log the error
            .catch(function (err) {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <div className="container">

                    {/* <h1 className="card-title text-center">Pod Help Me Login</h1> */}

                    <section className="mt-5">

                        <div className="card mx-auto" id="card-background" style={{ width: "30rem" }}>

                            <div className="card-header" id="card-header-bg">
                                <h1 style={{ textAlign: "center" }}>Pod Help Me Login</h1>
                            </div>

                            <div className="card-body">

                                <form className="login">

                                    <div className="form-group">
                                        <label for="exampleInputEmail1"></label>
                                        <input
                                            name='email'
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            type="email" className="form-control" id="email-input" placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputPassword1"></label>
                                        <input
                                            name='password'
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            type="password" className="form-control" id="password-input" placeholder="Password" />
                                    </div>

                                    <button
                                        onClick={this.handleFormSubmit}
                                        type="submit"
                                        className="btn btn-primary btn-lg pull-right">Login</button>

                                </form>

                                <br />

                            </div>

                            <div className="card-footer text-center" id="card-footer-bg" style={{ fontSize: "15pt" }}>
                                <button className="btn btn-primary btn-lg"><Link to="/" style={{ color: 'white' }}>Sign-Up Page</Link></button>

                            </div>

                        </div>

                    </section>

                </div>

                <footer className="fixed-bottom footer text-center">
                    <p>&copy; Pod Help Me 2020</p>
                </footer>

            </div>


        )
    }
};

export default Login;