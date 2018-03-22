import Marionette from "backbone.marionette";
import MessagesView from "../molcules/MessagesView";
import MessagesCollection from "../molcules/MessagesCollection";

import PostFormView from "../molcules/PostFormView";
import PostModel from "../molcules/PostModel";

import { postMessage } from "../../actions/PostMessage";

class Home extends Marionette.View {
  template() {
    return "<div></div>";
  }

  onRender() {
    const postFormView = new PostFormView({
      model: new PostModel(null, {
        store: this.options.store
      })
    });
    const messagesView = new MessagesView({
      collection: new MessagesCollection(null, {
        store: this.options.store
      })
    });
    this.$el.append(postFormView.render().$el);
    this.$el.append(messagesView.render().$el);
  }
}

export default Home;
