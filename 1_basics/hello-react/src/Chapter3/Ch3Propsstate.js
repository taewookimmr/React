import React, {Component} from 'react';

class Ch3Propsstate extends Component{
    constructor(props){
        super(props);
        this.state = {
            number : 100
        }
    }
    render() {
        return (
            <div>
                <p>Hi, My name is {this.props.name}.</p>
                <p>state test : {this.state.number} </p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>Plus</button>
            </div>
        );
    }
}

export default Ch3Propsstate;