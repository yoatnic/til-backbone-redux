import Marionette from "backbone.marionette";
import MessageView from "../atoms/MessageView";

class MessagesView extends Marionette.CollectionView {
  buildChildView(child, ChildViewClass, childViewOptions) {
    return new ChildViewClass(
      Object.assign({}, { model: child }, childViewOptions)
    );
  }

  get childView() {
    return MessageView;
  }
}

export default MessagesView;
