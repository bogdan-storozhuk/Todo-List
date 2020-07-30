import React from 'react';

import './todo-list-item.css'

const TodoListItem=({label,done=false,onDeleted,onToggleDone})=>{
    const button=done?<button className='item-delete-button' onClick={onDeleted}>Delete</button>:null;
    const itemStyle={
        color: done ? '#696a6c':'#419fce'
    }
    return(<span className='todo-list-item'>
        <span style={itemStyle} onClick={onToggleDone}>{label}</span>
        {button}
        </span>
    
    );
}

export default TodoListItem;