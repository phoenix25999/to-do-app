import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

const NewTask = ({ setShowModal }) => (

     <div className="new-task-container">
        <div className="new-task-overlay" onClick={()=>setShowModal(false)}></div>
        <div className="new-task-modal">
            <h2>Add a new task</h2>
            <NewTaskForm setShowModal={setShowModal} />
        </div>
    </div>
);

export default NewTask;