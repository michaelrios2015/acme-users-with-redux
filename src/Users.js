import React, { Component } from 'react';
import store from './store';

class Users extends Component{
    constructor(){
        super();
        this.state = {
            users: store.getState().users
        };
    }
    componentWillUnmount(){
       this.unsubscribe(); 
    }
    componentDidMount(){
        //console.log('hello');
        this.unsubscribe = store.subscribe(()=>{
            console.log("USER COMP DID  MOUNT");
            this.setState({
                users: store.getState().users
            });
        });
    }
    render() {
        const { users } = this.state;
        return (
            <ul>
                {
                    users.map( user => {
                        return (
                            <li key = { user.id }>
                                { user.name }
                            </li>
                        );
                    })
                } 
            </ul>
        );
    }
}

export default Users;