import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./roootReducer";

const middleWare = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export { store };
