import Backbone from "backbone";
import MessageModel from "../../atoms/Message/MessageModel";
import { initialize } from "../../../actions/MessageAction";

class MessagesCollection extends Backbone.Collection {
  get model() {
    return MessageModel;
  }

  initialize(models, { store }) {
    this._store = store;
    this._store.dispatch(initialize());
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
