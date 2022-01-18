import React, { Component } from 'react';


class Signup extends Component {
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
            <h1>Sign up</h1>      
            <section>
                <form className = "login-form">
                    <label className = "visible-always">
                        Username
                        <input type="text" name = "username" idName="name" value = {this.state.username} onChange = {this.handleInput}/>
                    <br/>
                    </label>

                     <label className = "hidden">
                        Email
                        <input type = "text" name = "email" idName = "emailAddress" value = {this.state.email} onChange = {this.handleInput}/>
                    </label>

                    <label className = "hidden">
                        Password    
                        <input type = "password" name = "password" idName = "password" value = {this.state.password} onChange = {this.handleInput}/>                    
                        <br />
                    </label>
               
                    <label className = "hidden">
                        Confirm password    
                        <input type = "password" name = "confirm" idName = "password" value = {this.state.confirm} onChange = {this.handleInput}/>                    
                        <br/>
                    </label>

                </form>

            </section>
            {/* <img src={logo} className = "logo" alt = "logo" /> */}
            </React.Fragment>
        )
    }
}

export default Signup;