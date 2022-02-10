// express router
const router = require("express").Router();

// set users controller
const {
  createUsers,
  getAllUsers,
  getUsersById,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/usersController");

//  /api/users
router.route("/")
  .get(getAllUsers)
  .post(createUsers);

//  /api/users/:usersId 
router.route("/:usersId")
  .get(getUsersById)
  .put(updateUsers)
  .delete(deleteUsers);

//  /api/users/:usersId/friends/:friendId
router.route("/:usersId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

// Module export router
module.exports = router;