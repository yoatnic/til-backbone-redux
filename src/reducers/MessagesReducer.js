//@flow
import { POST_MESSAGE } from "../actions/PostMessage";
import type { Message, MessageAction } from "../actions/PostMessage";

export type State = {
  messages: Array<Message>
};

const initinalState: State = {
  messages: []
};

export const messagesReducer = (
  state: State = initinalState,
  action: MessageAction
): State => {
  switch (action.type) {
  case POST_MESSAGE:
    const newState: State = Object.assign({}, state, {
      messages: [...state.messages, action.message]
    });
    return newState;
  default:
    return state;
  }
};
