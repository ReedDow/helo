import React, {Component} from 'react';
import axios from 'axios';
import './Post.css';
import {connect} from 'react-redux';

class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    

    deletePost = (id) => {
        axios.delete(`/api/post/${id}`)
        .then(() => {
            this.getUserPosts();
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className = 'postcontainer'>


            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Post)