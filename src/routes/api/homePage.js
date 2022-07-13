const { Router } = require("express");

const {
  getAllPlaylists,
  getSinglePlaylist,
  createPlaylist,
} = require("../../controllers/api/playlists");
const playlistSongs = require("./playlistSongs");

const router = Router();

router.get("/", getAllPlaylists);
router.get("/:id", getSinglePlaylist);
router.post("/", createPlaylist);
router.use("/:id/songs", playlistSongs);

module.exports = router;
