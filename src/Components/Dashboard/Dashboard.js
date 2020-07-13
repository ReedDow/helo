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

    getUserPosts = () => {
        axios.get(`api/posts/${this.props.user.user_id}`)
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.log(err));
    }

    handleInput = (val) =>
        this.setState({search: val})

    handleCheckboxChange = event =>
        this.setState({userposts: event.target.checked})

    render(){
        // console.log(this.props)
        const mappedPosts = this.state.posts.map((post, i) => (
            <div className='allposts'>
                <img key={i} src={post.post_url} alt='posts' className='post-image'/>
                <button onClick={() => this.deletePost(post.post_id)}>Delete</button>
            </div>
        ))
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
                <h6>Recent Posts</h6>
                <div className='post-flex'>
                    {mappedPosts}
                </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Dashboard);