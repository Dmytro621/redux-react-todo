import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import reducerSwapi from './swapiReducer';
import reducerToDo from "./toDoReducer";
 
const store = configureStore({
    reducer: {
        todo: reducerToDo,
        swapi: reducerSwapi,
    },
    middleware: (defaultMiddleware) => {
        return [...defaultMiddleware(), logger]
    }
})

export default store 