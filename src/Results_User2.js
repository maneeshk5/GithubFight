import React, { Component } from 'react';
import './App.css';

class Results_User2 extends Component{


    componentWillUpdate(){
        console.log(this.props)
    }

    render(){
        const { totalUser2 } = this.props
        return(
            <div>
                <h6>{totalUser2}</h6>
            </div>
        )
    }
}

export default Results_User2;