import React, { Component } from 'react';
class Login extends Component {
    // Logic for the form

    constructor(props)
    { 
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm: '',
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

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

    handleSubmit(e) {

    }

    
    render() {

        return (
            <React.Fragment>
            {/* Renders the form */}
            <div className = "adjust-login">
                <div id = 'login-component'>
            <div className="short-logo-center"><img id = "small-shortLogo" src="logo.svg"/></div>
            <h1 className = 'login-info'>Register</h1>      
            <section>
                <form className = "login-form" onsubmit={this.handleSubmit}>
                    <div className = "login-entries">
                        <div className = 'login-label'>
                            Username            
                        </div>
                        <input name="username" autoComplete = "off" className = "login-fields" type="text" value={this.state.username} onChange={this.handleInput} />
                    </div>

                <div className = "login-entries">
                        <div className = 'login-label'>
                            Email          
                        </div>
                        <input name="email" autoComplete = "off" className = "login-fields" type="email" value={this.state.email} onChange={this.handleInput} />
                    </div>
    
                <div className = "login-entries">
                        <div className = 'login-label'>
                            Password          
                        </div>
                        <input name="email" autoComplete = "off" className = "login-fields" type="email" value={this.state.password} onChange={this.handleInput} />
                    </div>

                
                <div className = "login-entries">
                        <div className = 'login-label'>
                            Confirm          
                        </div>
                        <input name="email" autoComplete = "off" className = "login-fields" type="email" value={this.state.confirm} onChange={this.handleInput} />
                    </div>
                <input class = "form-submit" type="submit" value="Submit" />
                </form>
            </section>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Login;