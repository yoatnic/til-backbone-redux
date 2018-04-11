//@flow
import { createStore, applyMiddleware } from "redux";
import { messagesReducer } from "./reducers/MessagesReducer";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(messagesReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
