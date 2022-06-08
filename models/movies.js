const mongoose = require("mongoose");
module.exports = {
  moviesDrawer: mongoose.model("moviesDrawer", {
    created: { type: Date, default: Date.now },
    cover: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    }
  })
};
