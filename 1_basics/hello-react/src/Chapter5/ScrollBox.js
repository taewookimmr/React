import React, { Component } from 'react';
// import './ScrollBox.css';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const {scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight -clientHeight;
    }
    render() {

        const style ={
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle={
            width: '100%',
            height: '650px',
            background: 'linear-gradient(red, blue)'
        }
        return (
            <div
                // className='parent'
                style={style}
                ref={(ref)=>{this.box=ref}}>
                <div
                    // className='child'
                    style={innerStyle}
                    className='child'>
                </div>
            </div>
        );
    }
}

export default ScrollBox;