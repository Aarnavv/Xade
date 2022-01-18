import React, { Component } from 'react';
import './App.css'
import Login from './Login'
import Signup from './Signup'

const Logo = (props) => {
    return (
        <div class = "center-flex-logo"><img alt = 'logo' id = "shortLogo" src = {process.env.PUBLIC_URL + "/logo.svg"}/>  </div>
    )
}

class App extends Component {
    constructor(props) {
    super(props);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoClick = this.handleLoginClick.bind(this);
    this.state = {whatShow: 0};
  }

  handleLoginClick() {
    this.setState({whatShow: 1});

  }

  handleRegisterClick() {
    this.setState({whatShow: 2});
  }
    render() {
        const whatShow = this.state.whatShow;
        console.log(whatShow);
        let rightElement;
        switch(whatShow)
        {
            case 0:
                document.querySelector('html').style.animation = "grow 1s forwards";
                rightElement = <Logo />;
                break;
            case 1: case 2: 
                document.querySelector('html').style.animation = "shrink 1s forwards";
                document.querySelector('#right').style.backgroundColor = '#0f0f0f';
                break;
            default: 
                rightElement = function() {return <div></div>}
        }

        switch(whatShow) {
            case 1: 
                rightElement = <Login />;
                break;
            case 2:
                rightElement = <Signup />;  
                break;
        }
        return (
        <React.Fragment>
            <section className = "flex">
                
                <div id = "left">
                    <text id = "xade">Xade</text> 
                    <text id = "tagline">Reimagining social network </text>
                    <text id = "joinNow">And the stars look very different today</text>
                    <div>   
                        <button onClick = {this.handleLoginClick} id = 'login-button' className = "show">Login</button>
                    </div>

                    <div>
                        <hr id = 'left-hr'/> <sec>or</sec> <hr id = 'right-hr'/>
                    </div>

                    <div>
                        <button onClick = {this.handleRegisterClick} id = "register-button" className = "show">Register</button>
                    </div>    
                </div>

                <div id = "right">
                    {rightElement}
                </div>

            </section>
        </React.Fragment>
        )
        }
}   

export default App;