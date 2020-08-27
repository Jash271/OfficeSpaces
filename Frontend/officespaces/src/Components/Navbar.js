import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ isAuthenticated, user }) => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
        });
    })

    return (
        <div>
            <div class="navbar-fixed">
                <nav class="purple darken-3">
                    <div class="container">
                        <div class="nav-wrapper">
                            <a href="#home" class="brand-logo"><span className="grey-text">Office</span> <span className="white-text">Spaces</span> </a>
                            <ul class="right hide-on-med-and-down">
                                <li>
                                    <Link to='/dashboard' className="waves-effect">Dashboard</Link>
                                </li>
                                {isAuthenticated ? (
                                    < Fragment>
                                        <li>
                                            <span>
                                                Hello, {user.name}
                                            </span>
                                        </li>
                                    </Fragment>
                                ) : (
                                        <Fragment>
                                            <li>
                                                <Link to='/announcement' class="waves-effect waves-light">Announcements</Link>
                                            </li>
                                            <li>
                                                <Link to='/' class="waves-effect waves-light">Login</Link>
                                            </li>
                                        </Fragment>)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user
})


export default connect(mapStateToProps, null)(Navbar)
