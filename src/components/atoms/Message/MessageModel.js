import Backbone from "backbone";

class MessageModel extends Backbone.Model {
  defaults() {
    return { body: "" };
  }
}

export default MessageModel;
