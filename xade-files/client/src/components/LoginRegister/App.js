import React, { Component } from 'react';
import './App.css'
import Login from './Login'
import Signup from './Signup'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Logo = (props) => {
    return (
        <div className="center-logo align-middle"><img alt='logo' className="mx-auto aling-middle text-center" id="shortLogo" src={process.env.PUBLIC_URL + "/logo.svg"} />  </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoClick = this.handleLoginClick.bind(this);
        //specifies what to render on the right side of the screen
        this.state = { whatShow: 0 };
    }

    //alters state for render() - login
    handleLoginClick() {
        this.setState({ whatShow: 1 });

    }

    //alters state for render() - login
    handleRegisterClick() {
        this.setState({ whatShow: 2 });
    }
    render() {
        //value is 1 or 2 when the button is clicked. default is 0 (to render logo)
        const whatShow = this.state.whatShow;
        // console.log(whatShow);
        let rightElement;
        switch (whatShow) {

            case 1: case 2:

                //makes necessary changes for rendering the login / signup
                // var x = window.matchMedia("(max-width: 600px)")

                document.querySelector('html').style.animation = "shrink 1s forwards";
                document.querySelector('#right-section').style.backgroundColor = '#0f0f0f';
                break;

            //exceptional case
            default:
                rightElement = function () { return <div></div> }
        }

        switch (whatShow) {
            case 0:
                //renders logo
                rightElement = <Logo />;
                break;
            //sets the rightElement to login / signup when button is clicked.
            case 1:
                rightElement = <Login />;
                break;
            case 2:
                rightElement = <Signup />;
                break;
        }
        
        return (
            <React.Fragment>
                <section className="flex-section">
                    <div id="left-section">
                        <p className="special-text" id="xade-header">Xade</p>
                        <p className="special-text" id="tagline">Re-imagining social network</p>
                        <p className="special-text" id="join-now">We'll let you be in our dreams<br/>if we can be in yours.     </p>
                        <div>
                            <button onClick={this.handleLoginClick} id='login-button' className="show">Login</button>
                        </div>

                        <div className="login-signup-div text-center">
                            <hr className="align-middle" id='left-hr' /> or <hr className="align-middle" id='right-hr' />
                        </div>

                        <div>
                            <button onClick={this.handleRegisterClick} id="register-button" className="show">Register</button>
                        </div>
                    </div>

                    <div id="right-section">
                        {rightElement}
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default App;