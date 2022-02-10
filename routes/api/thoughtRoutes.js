// express router
const router = require("express").Router();

// set requirements 
const {
  getThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

//  /api/thoughts
router.route("/")
  .get(getThoughts)
  .post(createThoughts);

// /api/thoughts/:thoughtId
router.route("/:thoughtId")
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;