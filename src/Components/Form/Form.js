import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            img: '',
            content: ''
        }
    }

    createPost = () => {
        axios.post('/api/post', {id: this.props.user.user_id, postImage: this.state.postImage})
        .then(() => {
            this.getUserPosts();
            this.setState({postImage: ''});
        })
        .catch(err => console.log(err));
    }


    render(){
        return(
            <div>Form</div>
        )
    }
}

export default Form;