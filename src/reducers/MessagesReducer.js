//@flow
import {
  POST_MESSAGE,
  INITIALIZE_MESSAGES_ASYNC
} from "../actions/MessageAction";
import type {
  Message,
  InitializeAction,
  InitializeAsyncAction,
  PostMessageAction
} from "../actions/MessageAction";

type UniqueMessage = {
  id: number,
  mesasge: string
};

export type State = {
  messages: Array<Message> | Array<UniqueMessage>
};

const initinalState: State = {
  messages: []
};

const createId = ((): Function => {
  let id: number = 1;
  return (): number => id++;
})();

export const messagesReducer = (
  state: State = initinalState,
  action: InitializeAction | InitializeAsyncAction | PostMessageAction
): State => {
  switch (action.type) {
  case POST_MESSAGE:
    return Object.assign({}, state, {
      messages: [
        ...state.messages,
        Object.assign({ id: createId() }, action.message)
      ]
    });
  case INITIALIZE_MESSAGES_ASYNC:
    return Object.assign({}, state, {
      messages: action.messages.map(msg => {
        return Object.assign({ id: createId() }, { message: msg.message });
      })
    });
  default:
    return state;
  }
};
