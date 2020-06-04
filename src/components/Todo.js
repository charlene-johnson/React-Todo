import React from 'react';
import styled from "styled-components";

const TodoCompleted = styled.div `
    text-decoration: line-through;
`

const Todo = props => {
    return(
        <TodoCompleted onClick={()=> props.toggleTask(props.todo.id)} className={`todo${props.todo.completed ? 'completed' : ''}`}>
            <p>{props.todo.task}</p>
        </TodoCompleted>
    );
};

export default Todo;