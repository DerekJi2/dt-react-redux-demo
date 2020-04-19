import { createStore } from "redux";
import { addArticle } from "../actions/index";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;