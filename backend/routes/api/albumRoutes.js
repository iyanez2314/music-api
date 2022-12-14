const router = require("express").Router();

const {
  getAlbums,
  getAlbumById,
  addAlbum,
  updatedAnAlbum,
  deleteAlbum,
} = require("../../controllers/albumsControllers");

router.route("/").get(getAlbums).post(addAlbum);

router.route("/:id").get(getAlbumById).put(updatedAnAlbum).delete(deleteAlbum);

module.exports = router;
