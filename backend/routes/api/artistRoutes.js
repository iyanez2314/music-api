const router = require("express").Router();

const {
  getAllArtist,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
} = require("../../controllers/artistControllers");

router.route("/").get(getAllArtist).post(createArtist);

router.route("/:id").get(getArtistById).put(updateArtist).delete(deleteArtist);

module.exports = router;
