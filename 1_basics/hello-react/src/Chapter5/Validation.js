import React, { Component } from 'react';
import './Validation.css';

class Validation extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e)=>{
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.inputcom.focus();
    }



    render() {
        return (
            <div>
                <input
                    ref={(ref) => {this.inputcom=ref}}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked?(this.state.validated?'success':'failure'):''}
                />
                <button 
                    onClick={this.handleButtonClick}
                >
                    Validate
                </button>

            </div>
        );
    }
}

export default Validation;