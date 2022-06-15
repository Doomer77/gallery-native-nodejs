const Router = require("express");
const router = new Router();
const kindController = require("../controllers/kindController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), kindController.create);
router.get("/", kindController.getAll);

module.exports = router;
