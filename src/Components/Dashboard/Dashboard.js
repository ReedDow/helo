import React, {Component} from 'react';
import './Dashboard.css'
import axios from 'axios';
import {connect} from 'react-redux';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            search: '',
            userposts: true,
            postImage: ''
        }
    }

    

    

    deletePost = (id) => {
        axios.delete(`/api/post/${id}`)
        .then(() => {
            this.getUserPosts();
        })
        .catch(err => console.log(err));
    }

    handleInput = (val) =>
        this.setState({search: val})

    handleCheckboxChange = event =>
        this.setState({userposts: event.target.checked})

    render(){
        
        return(
            
            <div>
                <section className = 'searchcontainer'>
                <input 
                    className = 'searchinput'
                    value = {this.state.search}
                    placeholder = 'search by Title'
                    />
                <button className = 'srchbtn'>Search</button>
                <button className = 'resetbtn'>Reset</button>
                
                <input
                        className = 'checkbox'
                        type = 'checkbox'
                        checked = {this.state.checked}
                        onChange = {this.handleCheckboxChange}/>
                <span>My Posts</span>
                
                </section>
                <section className = 'dashboard'>


                </section>
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Dashboard);