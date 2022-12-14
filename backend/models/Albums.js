const { Schema, model } = require("mongoose");

const albumSchema = new Schema(
  {
    albumName: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Album = model("Album", albumSchema);

module.exports = Album;
