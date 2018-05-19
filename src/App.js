import React, { Component } from 'react';
import './App.css';
import FirstUserDetails from './FirstUserDetails';
import SecondUserDetails from './SecondUserDetails';
import Results_User1 from './Results_User1';
import Results_User2 from './Results_User2';

class App extends Component {

    constructor(props){
        super(props);
        // this.getUser() = this.getUser.bind(this);
        this.state ={
            user_one: {},
            user_two: {},
            totalUser1: "",
            totalUser2: ""
        }
    }

    getUser_first =() =>{
        const name_one = this.refs.name_one.value;
        // alert(name);
        fetch(`http://api.github.com/users/${name_one}`)
        // fetch('https://developer.github.com/v3/users/${name}')
            // .then(data => console.log(data))
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user_one: {
                        avatar_url: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        location: data.location,
                        bio: data.bio,
                        followers: data.followers,
                        following: data.following,
                        public_repos: data.public_repos,
                        subscriptions_url: data.subscriptions_url
                    }
                })
            })
    }


    getUser_second =() =>{
        const name_two = this.refs.name_two.value;
        // alert(name);
        fetch(`http://api.github.com/users/${name_two}`)
        // fetch('https://developer.github.com/v3/users/${name}')
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => {
                this.setState({
                    user_two: {
                        avatar_url: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        location: data.location,
                        bio: data.bio,
                        followers: data.followers,
                        following: data.following,
                        public_repos: data.public_repos,
                        subscriptions_url: data.subscriptions_url
                    }
                })
            })
    }

    CompareValues(){
        // const getFollowersUser1 = this.state.user_one.followers;
        // const getFollowersUser2 = this.state.user_two.followers;
        // const getFollowingUser1 = this.state.user_one.following;
        // const getFollowingUser2 = this.state.user_two.following;
        // const getPublicReposUser1 = this.state.user_one.public_repos;
        // const getPublicReposUser2 = this.state.user_two.public_repos;

        // const totalUser1 = (getFollowersUser1+getFollowingUser1+getPublicReposUser1)*3.9;
        // const totalUser2 = (getFollowersUser2+getFollowingUser2+getPublicReposUser2)*3.9;

        let totalUser1 = 1;
        let totalUser2 = 2;

        // console.log(totalUser1);
        // console.log(totalUser2);

        if (totalUser1 > totalUser2){
            console.log("here");

            totalUser1 = "Winner";
            totalUser2 = "Loser";

        }
        else if (totalUser2>totalUser1){
            console.log("here2");
            // this.setState({totalUser2: 'Winner'});
            // this.setState({totalUser1: 'Loser'});
            totalUser1 = "Loser";
            totalUser2 = "Winner";
        }
        else {
            console.log("here3");
            // this.setState({totalUser2: 'Draw'});
            // this.setState({totalUser1: 'Draw'});
            totalUser1 = "Draw";
            totalUser2 = "Draw";
        }

        const totalUsers = [totalUser2, totalUser1];

        return totalUsers;

    }

    componentDidMount() {
        const values = this.CompareValues();
        this.setState({
            totalUser1: 5,
            totalUser2: 10
        });

    }

  render() {
        const { user_one } = this.state;
        const { user_two } = this.state;
        const { totalUser1 } = this.state;
        const { totalUser2 } = this.state;
        // const { user_two } = this.state;
    return (
      <div className="App">

          {/*<div className="user_one">*/}
          <div className="compareButton col-sm-12">
          {/*<button onClick={this.CompareValues()}>Compare</button>*/}
          </div>
          <div className="col-sm-6">
          <Results_User1 totalUser1={totalUser1}/>
          <input className="firstUser" type="text" placeholder="Enter first username" ref="name_one"/>
            <button onClick={this.getUser_first}>Get User Details</button>
          <FirstUserDetails user_one={user_one}/>

          </div>
          {/*</div>*/}
          {/*<pre><code>{JSON.stringify(user)}</code></pre>*/}
          {/*<div className="user_two">*/}
          <div className="col-sm-6">
          <Results_User2 totalUser2={totalUser2}/>
          <input className="secondUser" type="text" placeholder="Enter second username" ref="name_two"/>
          <button onClick={this.getUser_second}>Get User Details</button>
          <SecondUserDetails user_two={user_two}/>
            </div>
          {/*<Results />*/}
          {/*</div>*/}
      </div>
    );
  }
}

export default App;
