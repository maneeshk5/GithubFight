import React, { Component } from 'react';
import './App.css';

class SecondUserDetails extends Component{

    render(){
        const { user_two } = this.props
        return(
            <div>
                <h6>User Details</h6>
                <h6>Username: {user_two.login}</h6>
                {/*<h6>User: {user.avatar_url}</h6>*/}
                <img className="imageSize" src={user_two.avatar_url} />
                <h6>Name: {user_two.name}</h6>
                <h6>Location: {user_two.location}</h6>
                <h6>Bio: {user_two.bio}</h6>
                <h6>Followers: {user_two.followers}</h6>
                <h6>Following: {user_two.following}</h6>
                <h6>Public Repos: {user_two.public_repos}</h6>
                <h6>{user_two.subscriptions_url}</h6>
            </div>
        )
    }
}
export default SecondUserDetails;