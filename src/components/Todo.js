import React from 'react';
import styled from "styled-components";

const Todo = props => {
    return(
        <div onClick={()=> props.toggleTask(props.todo.id)} className={`todo${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;