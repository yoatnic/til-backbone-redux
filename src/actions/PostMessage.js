//@flow
export const POST_MESSAGE = "POST_MESSAGE";

export type Message = {
  id: number,
  body: string
};

export type MessageAction = {
  type: string,
  message: Message
};

export const postMessage = (message: Message): MessageAction => {
  return { type: POST_MESSAGE, message };
};
