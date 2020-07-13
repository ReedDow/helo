import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import './Nav.css'

const Nav = props => {
    // console.log(props)
        return(
            <div>
            {props.location.pathname !== '/'
                ? (<div className ='nav-container'>
                 <nav>
                    {/* <img className = 'img' src = {props.user.profile_picture} alt = {props.user.username}></img> */}
                    <Link to='/dashboard' className='nav-links1'>Dashboard</Link>
                    <Link to='/new' className='nav-links2'>NewPost</Link>
                    <Link to='/' className='nav-links3'>Logout</Link>
                </nav>
            </div>)
            : null}
            </div>
        )    
    }
export default withRouter(Nav);