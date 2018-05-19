import React, { Component } from 'react';
import './App.css';

class FirstUserDetails extends Component{

    render(){
        const { user_one } = this.props
        return(
            <div>
                <h6>User Details</h6>
                <h6>Username: {user_one.login}</h6>
                {/*<h6>User: {user.avatar_url}</h6>*/}
                <img className="imageSize" src={user_one.avatar_url} />
                <h6>Name: {user_one.name}</h6>
                <h6>Location: {user_one.location}</h6>
                <h6>Bio: {user_one.bio}</h6>
                <h6>Followers: {user_one.followers}</h6>
                <h6>Following: {user_one.following}</h6>
                <h6>Public Repos: {user_one.public_repos}</h6>
                <h6>{user_one.subscriptions_url}</h6>
            </div>
        )
    }
}
export default FirstUserDetails;