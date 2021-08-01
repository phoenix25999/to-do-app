import React, { useState } from 'react';
import EditTask from '../../EditTask/EditTask';
import EditIcon from '../../../assets/edit-icon.svg';
import DeleteIcon from '../../../assets/delete-icon.svg';
import { deleteTask } from '../../../store/action';
import { connect } from 'react-redux';

const Task = ({ task, nonEditable, abandoned, deleteTask }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="task">
            <p>{task.title}</p>
            <div style={{display: 'flex'}}>
                { 
                    !nonEditable && <p onClick={()=>setShowModal(true)} className="edit"><img src={EditIcon} alt="" /></p> 
                }
                {
                    abandoned && <p onClick={()=>deleteTask(task.id)} className="delete"><img src={DeleteIcon} alt="" /></p>
                }
            </div>
            { nonEditable && <p>{task.category.charAt(0).toUpperCase() + task.category.slice(1)}</p> }
            {
                showModal && <EditTask task={task} setShowModal={setShowModal} />
            }
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: ( id ) => dispatch( deleteTask(id) )
    };
};

export default connect(null, mapDispatchToProps)(Task);