import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class NavigationComponent extends Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><NavLink to= "/"><div><p>Exchange</p></div></NavLink>
                {/* <a href="#">
                    <div>
                        <p>
                            Exchange
                        </p>
                    </div>
                </a> */}
                </li>
                <li><NavLink to="/p2p"><div><p>P2P</p></div></NavLink>
                {/* <a href="#">
                    <div>
                        <p>
                            P2P
                        </p>
                    </div>
                </a> */}
                </li>
                <li><NavLink to= "/"><div><p>Log in</p></div></NavLink>
                {/* <a href="#">
                    <div>
                        <p>
                            Log in
                        </p>
                    </div>
                </a> */}
                </li>
                <li className="sign_up"><NavLink to= "/"><div><p>Sign up</p></div></NavLink>
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
