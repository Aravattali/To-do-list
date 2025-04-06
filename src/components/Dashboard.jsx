import React, { useState } from "react";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [showTasks, setShowTasks] = useState(true);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditedTask(tasks[index]);
    };

    const saveEditedTask = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = editedTask;
        setTasks(updatedTasks);
        setEditingIndex(null);
        setEditedTask("");
    };

    return (
        <div>
            <h2>To-Do List</h2>

            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <button onClick={() => setShowTasks(!showTasks)}>
                {showTasks ? "Hide Tasks" : "View Tasks"}
            </button>

            {showTasks && (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {editingIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={editedTask}
                                        onChange={(e) =>
                                            setEditedTask(e.target.value)
                                        }
                                    />
                                    <button onClick={saveEditedTask}>
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    {task}
                                    <button onClick={() => startEditing(index)}>
                                        Edit
                                    </button>
                                    <button onClick={() => deleteTask(index)}>
                                        Delete
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dashboard;
