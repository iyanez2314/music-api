const { Albums, Artist } = require("../models");

const albumController = {
  // get all the albums
  getAlbums(req, res) {
    Albums.find({})
      .then((dbAlbumData) => res.json(dbAlbumData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get an album by id
  getAlbumById({ params }, res) {
    Albums.findOne({ _id: params.id })
      .then((dbAlbumData) => {
        if (!dbAlbumData) {
          res.status(404).json({ message: "No album found with this id!" });
        }
      })
      .catch((err) => res.json(err));
  },

  addAlbum({ params, body }, res) {
    Albums.create(body)
      .then(({ _id }) => {
        return Artist.findOneAndUpdate(
          { _id: body.artistId },
          { $push: { albums: _id } },
          { new: true }
        );
      })
      .then((dbAlbumData) => {
        if (!dbAlbumData) {
          res
            .status(404)
            .json({ message: "There is no user found with this id" });
          return;
        }
        res.json(dbAlbumData);
      })
      .catch((err) => res.json(err));
  },

  updatedAnAlbum({ params, body }, res) {
    Albums.findByIdAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbAlbumData) => {
        if (!dbAlbumData) {
          res.status(404).json({ message: "there is no album with that id!" });
          return;
        }
        res.json(dbAlbumData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deleteAlbum({ params }, res) {
    Albums.findOneAndDelete({ _id: params.id })
      .then((dbAlbumData) => {
        if (!dbAlbumData) {
          res.status(400).json({ message: "There is so album with that id!" });
          return;
        }
        res.json(dbAlbumData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};

module.exports = albumController;
