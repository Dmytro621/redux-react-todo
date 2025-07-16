import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import reducer from "./toDoReducer";
 
const store = configureStore({
    reducer: reducer,
    middleware: (defaultMiddleware) => {
        return [...defaultMiddleware(), logger]
    }
})

export default store