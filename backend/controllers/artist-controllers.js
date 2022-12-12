const { Artist } = require("../models");

const artistController = {
  // Get all artist
  getAllArtist(req, res) {
    Artist.find({})
      .then((dbArtistData) => res.json(dbArtistData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Get the artist by the Id in params
  getArtistById({ params }, res) {
    Artist.findOne({ _id: params.id })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          res.status(404).json({ message: "No user found with that id" });
          return;
        }
        res.json(dbArtistData);
      })
      .catch((err) => res.json(err));
  },

  createArtist({ body }, res) {
    Artist.create(body)
      .then((dbArtistData) => res.json(dbArtistData))
      .catch((err) => res.json(err));
  },
  // updating artist that exsist
  updateArtist({ params, body }, res) {
    Artist.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbArtistData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // delete artist
  deleteArtist({ params }, res) {
    Artist.findOneAndDelete({ _id: params.id })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }

        res.json(dbArtistData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = artistController;
