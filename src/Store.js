//@flow
import { createStore } from "redux";
import { messagesReducer } from "./reducers/MessagesReducer";

export const store = createStore(messagesReducer);
