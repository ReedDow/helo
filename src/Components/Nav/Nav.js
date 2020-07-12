import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import './Nav.css'

const Nav = props => {
    console.log(props)
        return(
            <div>
            {props.location.pathname !== '/'
                ? (<container className ='nav-container'>
                <h1 className = 'nav-photo'></h1>
                 <nav>
                    <Link to='/dashboard' className='nav-links1'>Dashboard</Link>
                    <Link to='/post/:postid' className='nav-links2'>Post</Link>
                    <Link to='/' className='nav-links3'>Logout</Link>
                </nav>
            </container>)
            : null}
            </div>
        )    
    }
export default withRouter(Nav);