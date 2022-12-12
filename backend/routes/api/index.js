const router = require("express").Router();
const artistRoutes = require("./artistRoutes");

router.use("/artist", artistRoutes);

module.exports = router;
