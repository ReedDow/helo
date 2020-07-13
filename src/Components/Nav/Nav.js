import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import './Nav.css'

const Nav = props => {
    console.log(props.user)
        return(
            <div>
            {props.location.pathname !== '/'
                ? (<container className ='nav-container'>
                 <nav>
                    {/* <img className = 'img' src = {props.user.profile_picture} alt = {props.user.username}></img> */}
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