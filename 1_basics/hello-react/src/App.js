import React, { Component } from 'react';
import './App.css';
import Ch3Propsstate from './Chapter3/Ch3Propsstate';
import Ch4Event from './Chapter4/Ch4Event';
import Validation from './Chapter5/Validation';
import ScrollBox from './Chapter5/ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Ch3Propsstate name="kirk"/> */}
        {/* <Ch4Event/> */}
        {/* <Validation/> */}
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={()=>this.scrollBox.scrollToBottom()}>
          To the bottommost
        </button>
      </div>
    );
  }
}

export default App;
