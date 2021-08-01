import { DELETE_TASK, EDIT_TASK, FETCH_TASKS, SAVE_TASK } from "./actionType"

export const saveTask = ( task ) => {
    return {
        type: SAVE_TASK,
        data: task
    };
};

export const fetchTasks = () => {
    return {
        type: FETCH_TASKS
    };
};

export const editTask = ( id, updatedTask ) => {
    return {
        type: EDIT_TASK,
        id: id,
        data: updatedTask
    }
}

export const deleteTask = ( id ) => {
    return {
        type: DELETE_TASK,
        data: id
    }
}