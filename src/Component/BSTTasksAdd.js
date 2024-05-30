import React, { useState } from 'react';

const BSTTasksAdd = ({ onTaskAdd }) => {
    const [newTask, setNewTask] = useState({
        BST_taskId: '',
        BST_taskName: '',
        BST_level: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onTaskAdd(newTask);
        setNewTask({
            BST_taskId: '',
            BST_taskName: '',
            BST_level: ''
        });
    };

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Task ID:
                    <input
                        type="text"
                        name="BST_taskId"
                        value={newTask.BST_taskId}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Task Name:
                    <input
                        type="text"
                        name="BST_taskName"
                        value={newTask.BST_taskName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Level:
                    <input
                        type="text"
                        name="BST_level"
                        value={newTask.BST_level}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default BSTTasksAdd;
