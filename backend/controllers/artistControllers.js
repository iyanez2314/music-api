const { Artist } = require("../models");

const artistController = {
  // * Get all users
  getAllArtist(req, res) {
    Artist.find({})
      .populate({
        path: "albums",
        select: "-__v",
      })
      .then((dbArtistData) => res.json(dbArtistData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // * Get Artist By ID
  getArtistById({ params }, res) {
    Artist.findOne({ _id: params.id })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          res.status(404).json({ message: "No Artist found with this id!" });
          return;
        }
        res.json(dbArtistData);
      })
      .catch((err) => res.json(err));
  },

  // * creating a Artist
  createArtist({ body }, res) {
    console.log(body);
    Artist.create(body)
      .then((dbArtistData) => res.json(dbArtistData))
      .catch((err) => res.json(err));
  },

  // * updating a Artist
  updateArtist({ params, body }, res) {
    Artist.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          res.status(404).json({ message: "No Artist found with that id!" });
          return;
        }
        res.json(dbArtistData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //* delete a Artist
  deleteArtist({ params }, res) {
    Artist.findOneAndDelete({ _id: params.id })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          res.status(404).json({ message: "No Artist found with that id!" });
          return;
        }
        res.json(dbArtistData);
      })
      .catch((err) => res.status(400).json(err));
  },
};
module.exports = artistController;
