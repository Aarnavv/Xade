import React, { Component } from 'react';
class Login extends Component {
    // Logic for the form

    constructor(props)
    { 
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm: '',
            email: ''
        }

        this.handleInput = this.handleInput.bind(this)


    }

    handleInput(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        console.log(value)
        this.setState({
            [name]: value
        })
    }

    
    render() {
        return (
            <React.Fragment>
            {/* Renders the form */}
            <div className = "adjust-login">
                <div id = 'login-component'>
            <div className="short-logo-center"><img id = "small-shortLogo" src="logo.svg"/></div>
            <h1 className = 'login-info'>Let's log you in</h1>      
            <section>
                <form className = "login-form">
                    <div className = "login-username-entry">
                        <div className = 'login-label'>
                            Username / Email
                        </div>
                    </div>

                    <div className = "login-password-entry">
                    <div className = 'login-label'>
                                Password
                            </div>
                    </div>

                </form>

            </section>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Login;