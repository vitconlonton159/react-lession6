import React, { useState } from 'react';
import BSTListTasks from './Component/BSTListTasks';
import BSTTaskAdd from './Component/BSTTasksAdd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [BST_listTasks, setBSTListTasks] = useState([
        {
            BST_taskId: 1,
            BST_taskName: "Học lập trình frontend",
            BST_level: "Small"
        },
        {
            BST_taskId: 2,
            BST_taskName: "Học lập trình reactjs",
            BST_level: "Medium"
        },
        {
            BST_taskId: 3,
            BST_taskName: "Lập trình với Frontend - Reactjs",
            BST_level: "High"
        },
        {
            BST_taskId: 4,
            BST_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
            BST_level: "Small"
        }
    ]);

    const handleTaskAdd = newTask => {
        setBSTListTasks(prevTasks => [...prevTasks, newTask]);
    };

    return (
        <div ClassNane="App-header">
         <header>BST-220900075</header>
            <BSTListTasks tasks={BST_listTasks} />
            <BSTTaskAdd onTaskAdd={handleTaskAdd} />
        </div>
    );
};

export default App;
