import { createStore } from "redux";
import rootfunc from "./reducers/index";

const store = createStore(rootfunc , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;