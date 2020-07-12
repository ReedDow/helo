import React, {Component} from 'react';
import axios from 'axios';
import {getUser} from '../../ducks/reducer';
import {connect} from 'react-redux';
import './Auth.css';

class Auth extends Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: ''
        }
    }

handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
}

handleRegister = () => {
    const{username, password} = this.state;
    axios.post('/auth/register', {username, password})
    .then(res => {
        this.props.getUser(res.data);
        this.props.history.push('./dashboard');
    })
    .catch(err => console.log(err))
}

handleLogin = ()=> {
    const {username, password} = this.state;
    axios.post('/auth/login', {username, password})
    .then(res => {
        this.props.getUser(res.data);
        this.props.history.push('./dashboard')
    })
    .catch(err => console.log(err));
}

    render(){
        return(
            <div className = 'auth-background'>
            <div className = 'auth-container'>
                <section className = 'auth-info'>
                    <h1>Helo</h1>
                    <h3 className = 'unm'>Username:</h3>
                    <input
                        className = 'inptunm' 
                        value = {this.state.username}
                        name = 'username'
                        onChange ={(e) => this.handleInput(e)}/>
                    <h3 className = 'pw'>Password:</h3>
                    <input  className = 'inptpw'
                            type = 'password'
                            value = {this.state.password}
                            name = 'password'
                            onChange = {(e) => this.handleInput(e)}/>
                    <button className = 'btn1' onClick = {this.handleLogin}>Login</button>
                    <button className = 'btn2' onClick = {this.handleRegister}>Register</button>
                </section>
            </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;
export default connect(null, {getUser})(Auth)