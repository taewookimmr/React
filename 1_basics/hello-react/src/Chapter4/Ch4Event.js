import React, { Component } from 'react';

class Ch4Event extends Component {
    state = {
        message: '',
        username: ''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () =>{
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username:'',
            message:''
        });
    }
    render() {
        return (
            <div>
                <h1>Event Test</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="user name"
                    value={this.state.username}
                    onChange={this.handleChange}>
                </input>
                <input type="text"
                    name="message"
                    placeholder="enter anything"
                    value={this.state.message}
                    onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>
                    Check
                </button>
            </div>
        );
    }
}

export default Ch4Event;