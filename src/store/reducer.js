import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { DELETE_TASK, EDIT_TASK, FETCH_TASKS, SAVE_TASK } from "./actionType";

const initialState = {
    tasks: []
};

const reducer = ( state = initialState, action ) => {
   switch(action.type) {
       case SAVE_TASK:
            const today= new Date();
            const date = String(today.getDate()).padStart(2, '0') + '/' + String((today.getMonth()+1)).padStart(2, '0') +'/'+today.getFullYear();
           state = {
               ...state,
               tasks: [
                   ...state.tasks,
                  { ...action.data, id: Date.now(), createdOn: date}
               ]
           };
           return state;
        case FETCH_TASKS:
            return state;
        case EDIT_TASK: 
           const index = state.tasks.findIndex(task => task.id === action.id);
           let updatedTasks = [...state.tasks];
           updatedTasks[index] = {...updatedTasks[index], ...action.data};
           
           state = {
               tasks: updatedTasks
           };
           return state;
        case DELETE_TASK:
            const newTaskArray = state.tasks.filter(task => task.id!==action.data);
            state = {
                tasks: newTaskArray
            };
            return state;
        default:
            return state;
   }
};

const persistConfig = {
    key: 'tasks',
    storage: storage,
    whitelist: ['tasks']
};

export default persistReducer(persistConfig, reducer);

//export default reducer;