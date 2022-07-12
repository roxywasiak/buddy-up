const { Router } = require("express");
const { login, create, logout } = require("../../controllers/auth");

const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

module.exports = router;
