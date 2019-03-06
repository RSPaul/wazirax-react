import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class NavigationComponent extends Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                <div><NavLink to= "/">Exchange</NavLink></div>
                {/* <a href="#">
                    <div>
                        <p>
                            Exchange
                        </p>
                    </div>
                </a> */}
                </li>
                <li>
                <div><NavLink to="/p2p">P2P</NavLink>    </div>
                {/* <a href="#">
                    <div>
                        <p>
                            P2P
                        </p>
                    </div>
                </a> */}
                </li>
                <li>
               <div> <NavLink to= "/">Log in</NavLink></div>
                {/* <a href="#">
                    <div>
                        <p>
                            Log in
                        </p>
                    </div>
                </a> */}
                </li>
                <li className="sign_up">
                <div> <NavLink to= "/">Sign up</NavLink></div>
                {/* <a href="#">
                    <div>
                        <p>
                            Sign up
                        </p>
                    </div>
                </a> */}
                </li>
            </ul>

        );
    }
};


export default NavigationComponent;
