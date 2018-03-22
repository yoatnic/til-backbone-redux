import Backbone from "backbone";
import MessageModel from "../atoms/MessageModel";

class MessagesCollection extends Backbone.Collection {
  get model() {
    return MessageModel;
  }

  initialize(models, { store }) {
    this._store = store;

    this._store.subscribe(() => {
      const newMessages = this._store.getState().messages;
      const diff = newMessages.filter(message => {
        return !this.findWhere({ id: message.id });
      });
      this.add(diff);
    });
  }
}

export default MessagesCollection;
