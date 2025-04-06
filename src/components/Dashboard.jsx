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
        <div className="bg-[#2C4E57] min-h-screen p-8">
            <h2 className="text-white text-3xl font-semibold mb-4">To-Do List</h2>

            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="p-2 rounded border border-gray-300 mb-4"
            />
            <button
                onClick={addTask}
                className="bg-[#6881FE] text-white px-4 py-2 rounded hover:bg-[#5679e5] mr-2"
            >
                Add Task
            </button>
            <button
                onClick={() => setShowTasks(!showTasks)}
                className="bg-[#6881FE] text-white px-4 py-2 rounded hover:bg-[#5679e5]"
            >
                {showTasks ? "Hide Tasks" : "View Tasks"}
            </button>

            {showTasks && (
                <ul className="mt-6">
                    {tasks.map((task, index) => (
                        <li key={index} className="flex items-center mb-2 space-x-2">
                            {editingIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={editedTask}
                                        onChange={(e) => setEditedTask(e.target.value)}
                                        className="p-2 rounded border border-gray-300"
                                    />
                                    <button
                                        onClick={saveEditedTask}
                                        className="bg-[#693EBE] text-white px-4 py-2 rounded hover:bg-[#582a9f]"
                                    >
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span>{task}</span>
                                    <button
                                        onClick={() => startEditing(index)}
                                        className="bg-[#693EBE] text-white px-4 py-2 rounded hover:bg-[#582a9f]"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteTask(index)}
                                        className="bg-[#962C12] text-white px-4 py-2 rounded hover:bg-[#7d2310]"
                                    >
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
