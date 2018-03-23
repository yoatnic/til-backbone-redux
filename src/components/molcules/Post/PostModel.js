import Backbone from "backbone";
import { postMessage } from "../../../actions/PostMessage";

let id = 1;
class PostModel extends Backbone.Model {
  initialize(attrs, { store }) {
    this._store = store;
  }

  post(message) {
    this._store.dispatch(
      postMessage({
        id,
        message
      })
    );
    id++;
  }
}

export default PostModel;
