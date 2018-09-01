import React from 'react';

const Todo = props => (
    <ul>
        {
            props.task.map((task, index) =><li key={index}>{task}</li>
        )}
    </ul>
)


export default Todo;