//@flow
export const INITIALIZE_MESSAGES = "INITIALIZE_MESSAGES";
export const INITIALIZE_MESSAGES_ASYNC = "INITIALIZE_MESSAGES_ASYNC";
export const POST_MESSAGE = "POST_MESSAGE";

export type Message = {
  message: string
};

export type InitializeAction = {
  type: string
};

export type InitializeAsyncAction = {
  type: string,
  message: Message
};

export type PostMessageAction = {
  type: string,
  message: Message
};

export const initialize = (): InitializeAction => {
  return { type: INITIALIZE_MESSAGES };
};

export const initializeAsync = (messages: Array<Message>) => {
  return { type: INITIALIZE_MESSAGES_ASYNC, messages };
};

export const postMessage = (message: Message): PostMessageAction => {
  return { type: POST_MESSAGE, message };
};
