const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "public/",
    historyApiFallback: true,
    port: 8080,
    before(app) {
      const bodyParser = require("body-parser");
      app.use(bodyParser());
      let db = [];
      app.get("/messages", (req, res) => {
        res.json(db);
      });
      app.post("/messages", (req, res) => {
        db = req.body;
        res.sendStatus(200);
      });
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};
