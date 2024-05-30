import React from 'react';

const BSTListTasks = ({ tasks }) => {
    return (
        <div>
            <h2>List Tasks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.BST_taskId}>
                            <td>{task.BST_taskId}</td>
                            <td>{task.BST_taskName}</td>
                            <td>{task.BST_level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BSTListTasks;
