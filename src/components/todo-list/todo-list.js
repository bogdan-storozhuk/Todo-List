import React from 'react';

import './todo-list.css';

import TodoListItem from '../todo-list-item/todo-list-item';

const  TodoList = ({todoItems,onDeleted,onToggleDone}) =>{
    const items=todoItems.map((item)=>{
        const {id,...itemProps} = item
       return (
       <li className="todo-list-item-container" key={id}>
           <TodoListItem {...itemProps} 
           onDeleted={()=>{onDeleted(id)}}
           onToggleDone={()=>onToggleDone(id)}/>
        </li>);
    })

    return (
        <ul className="todo-list">
            {items}
        </ul>
    );
}
export default TodoList;