import React, { Component } from 'react';
import NavigationComponent from '../navigation/index';
import { NavLink } from 'react-router-dom';
class HeaderComponent extends Component {
    render() {

    function addClass(name) {
        var x = document.getElementById("navbar");
        if (x.className === "collapse navbar-collapse") {
            x.className += " in";
        } else {
            x.className = "collapse navbar-collapse";
        }
    }
    const images = this.props.images;
        return (
            <header className="main_header">
                <div className="top_strip text-center">
                    Earn up to ₹10,000 worth BTT in Highest Trader Kaun tonight 9-11PM! <a href="Javascript:void(0);">Leaderboard</a>
                </div>
                <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <button type="button" onClick={addClass} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" to= "/"><img src={images['logo.png']} /></NavLink>
                        
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                    <NavigationComponent />
                        {/* <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">
                                <div>
                                    <p>
                                        Exchange
                        </p>
                                </div>
                            </a>
                            </li>
                            <li><a href="#">
                                <div>
                                    <p>
                                        P2P
                        </p>
                                </div>
                            </a>
                            </li>
                            <li><a href="#">
                                <div>
                                    <p>
                                        Log in
                        </p>
                                </div>
                            </a>
                            </li>
                            <li className="sign_up"><a href="#">
                                <div>
                                    <p>
                                        Sign up
                        </p>
                                </div>
                            </a>
                            </li>
                        </ul> */}
                    </div>{/*/.nav-collapse */}
                </nav>
            </header>

        );
    }
};


export default HeaderComponent;
