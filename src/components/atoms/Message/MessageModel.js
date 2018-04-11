import Backbone from "backbone";

class MessageModel extends Backbone.Model {
  defaults() {
    return { message: "" };
  }
}

export default MessageModel;
