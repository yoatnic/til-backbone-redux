import Backbone from "backbone";
import { postMessage } from "../../../actions/MessageAction";

class PostModel extends Backbone.Model {
  initialize(attrs, { store }) {
    this._store = store;
  }

  post(message) {
    this._store.dispatch(
      postMessage({
        message
      })
    );
  }
}

export default PostModel;
