const { Schema, model } = require("mongoose");

const ArtistSchema = new Schema({
  artistname: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Album",
    },
  ],
});

const User = model("Artist", ArtistSchema);

module.exports = User;
