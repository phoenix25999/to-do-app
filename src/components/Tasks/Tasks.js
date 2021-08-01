import React from 'react';
import Task from './Task/Task';

const Tasks = ({ tasks, nonEditable, abandoned }) => {
    return (
        <div className="task-container">
            {
                !tasks?.length && nonEditable && <h1>No task created today</h1>
            }
            {
                tasks?.map(task=>(
                    <Task task={task} key={task.id} nonEditable={nonEditable} abandoned={abandoned} />
                ))
            }
         </div>
    );
};

export default Tasks;