import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8000');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!newTask.title.trim()) {
            errors.title = 'The title is required';
        }
        if (!newTask.description.trim()) {
            errors.description = 'The description is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            await axios.post('http://localhost:8000', {
                title: newTask.title,
                description: newTask.description,
            });
            setNewTask({
                title: '',
                description: '',
            });
            fetchTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className='container'>
            <h1>Todo App React</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' name='title' value={newTask.title} onChange={handleChange} placeholder='Enter title' />
                    {errors.title && <span className='errors'>{errors.title}</span>}
                </div>
                <div>
                    <textarea name='description' value={newTask.description} onChange={handleChange} placeholder='Enter description'/>
                    {errors.description && <span className='errors'>{errors.description}</span>}
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} - {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
