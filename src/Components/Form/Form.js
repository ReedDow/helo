import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
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

    //type error: user_id undefined
    createPost = () => {
        
        axios.post('/api/post/:userid', {id: this.props.user.user_id, postImage: this.state.postImage, postTitle: this.state.postTitle, postContent: this.state.PostContent})
        .then(() => {
            this.getUserPosts();
            this.setState({postImage: '', postTitle: '', postContent: ''});
        })
        .catch(err => console.log(err));
    }

    handleInputImg = (val) => {
        this.setState({postImage: val})
    }
    handleInputTitle = (val) => {
        this.setState({postTitle: val})
    }
    handleInputContent = (val) => {
        this.setState({postContent: val})
    }


    render(){
        console.log(this.props)
        return(
            <div className = 'newpost'>New Post
                <input
                    className = 'input1'
                    value={this.state.postTitle}
                    placeholder='Add Title'
                    onChange={(e) => this.handleInputTitle(e.target.value)}/>
                <img 
                    placeholder = 'image preview' 
                    className= 'imgpreview'
                    src= {this.state.img}></img>
                <input 
                    className = 'input2'
                    value={this.state.postImage}
                    placeholder='Add Image URL'
                    onChange={(e) => this.handleInputImg(e.target.value)}/>
                    
                <textarea 
                    rows = '15'
                    cols = '20'
                    wrap = 'hard'
                    className = 'input3'
                    value={this.state.postContent}
                    placeholder='Add Content'
                    onChange={(e) => this.handleInputContent(e.target.value)}/>
                
                <button className ='postbtn' onClick={this.createPost}>Post</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Form)