import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Users from './Users';
import Nav from './Nav';
import store from './store';

class App extends Component {
    constructor(){
        super();
        this.state = {...store.getState(), view: '' };
    }
    async componentDidMount(){

        window.addEventListener('hashchange', ()=> {
            this.setState({ view: window.location.hash.slice(1)});
        })
        this.setState({ view: window.location.hash.slice(1)});

        const users = (await axios.get('/api/users')).data;
        store.subscribe(()=> {
            this.setState(store.getState());
            //console.log(this.state);
        });

        store.dispatch({
            type: 'LOAD_USERS',
            users
        });
        store.dispatch({
            type: 'LOADED'
        });

    }

    render(){
        const { loading, view } = this.state;
        if(loading){
            return '....loading';
        }
        return (
            <div>
                <Nav />
                { view === '' ? <div>Home</div> : <Users /> }
            </div>
    );
  }
}

render(<App />, document.querySelector('#root'));