import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../store/action';

import Categories from '../Categories/Categories';
import LandingPage from '../LandingPage/LandingPage';
import Modal from '../Modal/Modal';
import NewTask from '../NewTask/NewTask';
import Tasks from '../Tasks/Tasks';

const Home = ({ tasks }) => {
    const [showModal, setShowModal] = useState(false);
    const [showTodaysTasks, setShowTodaysTasks] = useState(false);
    const [todaysTasks, setTodaysTasks] = useState([]);

    const today= new Date();
    const date = String(today.getDate()).padStart(2, '0') + '/' + String((today.getMonth()+1)).padStart(2, '0') +'/'+today.getFullYear();

    useEffect(() => {
        const todaysTasksArray = tasks.filter(task => task.createdOn === date);
        setTodaysTasks(todaysTasksArray);
        console.log(todaysTasksArray);
    }, [tasks, date])

    const onAddTask = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const onShowTodaysTasks = (event) => {
        event.preventDefault();
        setShowTodaysTasks(true);
    }

    return (
        tasks.length?
            <div className="home">
                <div className="header">
                    <h1>Here's your to do list ...</h1>
                    <div>
                        <button onClick={(e)=>onShowTodaysTasks(e)} className="btn todays-task-btn">Today's Tasks</button>
                        <button onClick={(e)=>onAddTask(e)} className="btn">Add New Task</button>
                    </div>
                </div>
                <Categories />
                {
                    showModal && <NewTask setShowModal={setShowModal} />
                }
                {
                    showTodaysTasks &&  <Modal setShowModal={setShowTodaysTasks}><Tasks tasks={todaysTasks} nonEditable /></Modal>
                }
            </div>
            :
            <LandingPage />
    );
};

const mapStateToProps = ({ taskReducer }) => {
  return {
    tasks: taskReducer.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch( fetchTasks() )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);