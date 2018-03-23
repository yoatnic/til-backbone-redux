import Marionette from "backbone.marionette";

class PostForm extends Marionette.View {
  template() {
    return "<input type=\"text\"><button>post</button>";
  }

  ui() {
    return {
      text: "input",
      button: "button"
    };
  }

  events() {
    return {
      "click @ui.button": "post"
    };
  }

  post() {
    const val = this.ui.text.val();
    this.model.post(val);
  }
}

export default PostForm;
