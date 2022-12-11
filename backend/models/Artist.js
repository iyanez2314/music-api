const { Schema, model } = require("mongoose");

const ArtistSchema = new Schema({
  artistName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});

const Artist = model("Artist", ArtistSchema);
module.exports = Artist;
