import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class SignUp extends Component {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        var userData = {
            email: this.state.email.trim(),
            password: this.state.password.trim()
        };

        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if (!strongRegex.test(userData.password)) {
            this.setState({password:""});
            console.log("Not a strong enough password requires 1 lowercase, 1 uppercase, 1 numeric, 1 special character, and 8 characters or longer!");
            // $("#alert").text("Not a strong enough password requires 1 lowercase, 1 uppercase, 1 numeric, 1 special character, and 8 characters or longer!");
            // $("#alert").fadeIn(500);
        }
        else {
            if (!userData.email || !userData.password) {
                return;
            }
            // If we have an email and password, run the signUpUser function
            this.signUpUser(userData.email, userData.password);
            this.setState({ email: "" });
            this.setState({ password: "" });
        }
    };

    // When the signup button is clicked, we validate the email and password are not blank
    signUpUser(email, password) {
        return axios.post("/api/signup", {email, password})
    .then(function (data) {
        console.log(data);
        window.location.replace("/podcasts");
        // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(this.handleLoginErr);
    };

    handleLoginErr(err) {
        if (err) { console.log("Your email is already in use!"); }
        //**how do I convert this to react?
        //$("#alert").text("Your email is already in use!");
        // $("#alert").fadeIn(500);
      }

    render() {
        return (

            <div>
                <div className="container">
                    <h1 className="card-title text-center mt-4">Welcome to Pod Help Me</h1>
                    <section className="mt-5">
                        <div className="card mx-auto" id="card-background" style={{ width: "30rem" }}>
                            <div className="card-header mb-3" id="card-header-bg">
                                <h3 style={{textAlign: "center"}}>Sign-Up</h3>
                            </div>

                            <div className="card-body">

                                <form className="signup">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1"></label>
                                        <input
                                            name='email'
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            type="email"
                                            className="form-control"
                                            id="email-input"
                                            placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputPassword1"></label>
                                        <input
                                            name='password'
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            type="password"
                                            className="form-control"
                                            id="password-input"
                                            placeholder="Password" />
                                    </div>

                                    <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
                                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        <span className="sr-only">Error:</span> <span className="msg"></span>
                                    </div>

                                    <button
                                        onClick={this.handleFormSubmit}
                                        type="submit"
                                        className="btn btn-primary btn-lg pull-right">Sign Up</button>
                                </form>

                                <br/>
                                <br/>
                                <br/>

                                <section>
                                    <p className="text-content text-center">Password requires 8 characters. Has to include 1 lowercase, 1 uppercase, 1 numeric and 1 special character</p>
                                </section>

                            </div>
                            <div className="card-footer text-center" id="card-footer-bg" style={{fontSize: '15pt' }}>
                                <button className="btn btn-primary btn-lg"><Link to="/login" style={{ color: 'white', }}>Login Page</Link></button> 

                            </div>
                        </div>
                    </section>
                </div>
                <footer className="fixed-bottom footer text-center">
                    <p>&copy; Pod Help Me 2020</p>
                </footer>
            </div>
        );
    }
};

export default SignUp;