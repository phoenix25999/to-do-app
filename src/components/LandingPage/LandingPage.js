import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <h1>Hello there...</h1>
            <h2>Looks like you haven't created any tasks yet</h2>
            <h3>Let's get started by creating your first task</h3>
            <div className="new-task-form">
                <NewTaskForm />
            </div>
        </div>
    );
};

export default LandingPage;