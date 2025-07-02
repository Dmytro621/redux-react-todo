import { createStore } from "redux";
import reducer from "./toDoReducer";
 
const store = createStore(reducer)

export default store