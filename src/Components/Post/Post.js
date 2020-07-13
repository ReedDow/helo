import React, {Component} from 'react';
import axios from 'axios';
import './Post.css';

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

    getUserPosts = () => {
        axios.get(`api/posts/${this.props.user.user_id}`)
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className = 'postcontainer'>

            </div>
        )
    }
}
export default Post;