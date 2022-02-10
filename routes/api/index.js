// express router
const router = require("express").Router();

// Set routes (user and thought routes)
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

//add /users and /thoughts to creat routes
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;