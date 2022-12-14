const router = require("express").Router();
const artistRoutes = require("./artistRoutes");
const albumRoutes = require("./albumRoutes");

router.use("/artist", artistRoutes);
router.use("/albums", albumRoutes);

module.exports = router;
