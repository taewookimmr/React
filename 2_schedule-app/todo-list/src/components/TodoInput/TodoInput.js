import React, { Component } from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class TodoInput extends Component {

    render() {
        const {value, onChange, onInsert} = this.props;
        const handleKeyPress = (e)=>{
            if(e.key === 'Enter'){
                onInsert();
            }
        }
        
        return (
            <div className={cx('todo-input')}>  
                <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
                <div className={cx('add-button')} onClick={onInsert}>Add</div>
            </div>
        );
    };
}

export default TodoInput;