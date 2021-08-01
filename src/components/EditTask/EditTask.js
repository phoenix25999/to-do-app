import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../../store/action';

const EditTask = ({ task, setShowModal, updateTask }) => {

    const [title, setTitle] = useState(task?.title);
    const [category, setCategory] = useState(task?.category);

    const onEditTask = (event) => {
        event.preventDefault();
        let updatedTask = {
            id: task.id
        };
        if(task.title !== title) {
            updatedTask = {
                ...updatedTask,
                title: title
            };
        }

        if(task.category !== category) {
            updatedTask = {
                ...updatedTask,
                category: category
            }
        }
        updateTask(task.id, updatedTask);
        setShowModal(false);
    };

    return (
        <div className="new-task-container">
            <div className="new-task-overlay" onClick={()=>setShowModal(false)} ></div>
            <div className="new-task-modal">
                <h2>Edit your Task</h2>
                <form>
                    <div>
                        <label>Task</label>
                        <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="edit-input" />
                    </div>
                    <div>
                        <label>Category</label>
                        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option value='pending'>Pending</option>
                            <option value='inProgress'>In Progress</option>
                            <option value='completed'>Completed</option>
                            <option value='abandoned'>Abandoned</option>
                        </select>
                    </div>

                    <button type="submit" className="add-task-btn" disabled={!title} onClick={(e)=>onEditTask(e)} >Update Task</button>
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        updateTask: (id, updatedTask) => dispatch( editTask(id, updatedTask) )
    };
};

export default connect(null, mapDispatchToProps)(EditTask);