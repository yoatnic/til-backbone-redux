import { all, fork, call, takeEvery, put } from "redux-saga/effects";
import {
  initializeAsync,
  POST_MESSAGE,
  INITIALIZE_MESSAGES,
  INITIALIZE_MESSAGES_ASYNC
} from "../actions/MessageAction";
import store from "../Store";

const get = function() {
  return fetch("/messages", {
    method: "GET"
  }).then(res => res.json());
};

const post = function() {
  const { messages } = store.getState();
  const data = messages.map(messageObj => {
    return {
      message: messageObj.message
    };
  });

  return fetch("/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

function* initialize() {
  yield takeEvery(INITIALIZE_MESSAGES, function*() {
    const messages = yield call(get);
    yield put(initializeAsync(messages));
  });
}

function* saveMessage() {
  yield takeEvery(POST_MESSAGE, function*() {
    yield call(post);
  });
}

export default function* rootSaga() {
  yield all([fork(initialize), fork(saveMessage)]);
}
