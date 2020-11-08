import React from 'react';

const TodoListPhaseFour = props => {
    const { text, id, completed } = props.todosItem

    // Event Listener
    const onChangeClick = () => props.handleChange(id)

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (
        <div className="todo-card">
            <input type="checkbox" onChange={onChangeClick} />
            <h5 style={completed ? completedStyle : null}>{text}</h5>
        </div>
    )
}

export default TodoListPhaseFour