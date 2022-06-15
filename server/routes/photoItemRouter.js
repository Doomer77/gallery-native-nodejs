const Router = require("express");
const router = new Router();
const imageItemController = require("../controllers/photoItemController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), imageItemController.create);
router.get("/", imageItemController.getAll);
router.get("/:id", imageItemController.getOne);

module.exports = router;
