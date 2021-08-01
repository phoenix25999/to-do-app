import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveTask } from '../../store/action';

const NewTaskForm = ({ addTask, setShowModal }) => {

    const [title, setTitle] = useState('');

    const onAddTask = ( event ) => {
        event.preventDefault();
        const task = {
            title: title,
            category: "pending"
        };
        addTask(task);
        setShowModal && setShowModal(false);
    }

    return (
        <form>
            <input type="text" name="title" value={title} placeholder="Enter task" onChange={(e)=>setTitle(e.target.value)}/>
            <button type="submit" className="add-task-btn" disabled={!title} onClick={(e)=>onAddTask(e)}>Add Task</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (task) => dispatch(saveTask(task))
    };
};

export default connect(null, mapDispatchToProps)(NewTaskForm);
