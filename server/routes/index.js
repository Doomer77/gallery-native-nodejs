const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const photoItemRouter = require("./photoItemRouter");
const typeRouter = require("./typeRouter");
const kindRouter = require("./kindRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/kind", kindRouter);
router.use("/photo-item", photoItemRouter);

module.exports = router;
