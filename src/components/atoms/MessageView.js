import Marionette from "backbone.marionette";

class MessageView extends Marionette.View {
  template(modelAttrs) {
    return `<div>${modelAttrs.message}</div>`;
  }
}

export default MessageView;
