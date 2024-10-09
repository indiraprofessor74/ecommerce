import React, { useState } from 'react';
import { Search } from './Search';

export const App = () => {
    const [todos, updateTodos] = useState([
        'task1',
        'task2',
        'task3'
    ]);

    const addNew = (newtask) => {
        updateTodos([...todos, newtask]);
    };

    return (
        <div>
            <Search newValue={addNew} />
            <ul>
                {todos.map((eachtask, index) => (
                    <li key={index}>{eachtask}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
