import React, { Component } from 'react';
import './App.css';

class Results_User1 extends Component{

    componentWillUpdate(){
        console.log(this.props)
    }

    render(){
        const { totalUser1 } = this.props
        return(
            <div>
                <h6>{totalUser1}</h6>
            </div>
                )
    }
}

export default Results_User1;