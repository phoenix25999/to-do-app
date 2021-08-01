import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../store/action';
import Tasks from '../Tasks/Tasks';

const Categories = ({ fetchTasks, tasks }) => {

    const [pendingTasks, setPendingTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]); 
    const [completedTasks, setCompletedTasks] = useState([]); 
    const [abandonedTasks, setAbandonedTasks] = useState([]);  

    useEffect(() => {
        fetchTasks();

        tasks.forEach(task => {
            switch(task.category) {
                case 'pending':
                    // const pendingTaskArray = [];
                    // pendingTaskArray.push(...pendingTasks);
                    // pendingTaskArray.push({...task});
                    
                    setPendingTasks(prevState => ([...prevState,{...task}]));
                    break;
                case 'inProgress':
                    // const inProgressTaskArray = [...inProgressTasks];
                    // inProgressTaskArray.push({...task});
                    setInProgressTasks(prevState => ([...prevState,{...task}]));
                    break;
                case 'completed':
                    // const completedTaskArray = [...completedTasks];
                    // completedTaskArray.push({...task});
                    setCompletedTasks(prevState => ([...prevState,{...task}]));
                    break;
                case 'abandoned':
                    // const abandonedTaskArray = [...abandonedTasks];
                    // abandonedTaskArray.push({...task});
                    setAbandonedTasks(prevState => ([...prevState,{...task}]));
                    break;
                default:
                    alert('Something went wrong');
                    break;
            };
        });

        return() => {
            setPendingTasks([]);
            setInProgressTasks([]);
            setCompletedTasks([]);
            setAbandonedTasks([]);
        }

    }, [fetchTasks, tasks]);

    return (
        <div className="categories-container">
            <div className="category-item">
                <h3 className="category-item-heading">Pending</h3>
                <Tasks tasks={pendingTasks} />
            </div>
            <div className="category-item">
                <h3 className="category-item-heading">In Progress</h3>
                <Tasks tasks={inProgressTasks} />
            </div>
            <div className="category-item">
                <h3 className="category-item-heading">Completed</h3>
                <Tasks tasks={completedTasks} />
            </div>
            <div className="category-item">
                <h3 className="category-item-heading">Abandoned</h3>
                <Tasks tasks={abandonedTasks} abandoned />
            </div>
            {/* <div className="category-item">
                <h3>Task</h3>
            </div> */}
        </div>
    );
};

const mapStateToProps = ({ taskReducer }) => {
    return {
      tasks: taskReducer.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch( fetchTasks() )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);