const { Thoughts, User, Reaction } = require("../models");

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // get a thought
  getThoughtsById(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a Thought
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((dbThoughtData) => {
        !dbThoughtData
          ? res.status(404).json({ message: "No thoughts!" })
          : User.findOneAndUpdate(
            req.body.userId,
            //connects it to the user to display in the get all user
            { $addToSet: { thoughts: dbThoughtData._id } },
            { runValidators: true, new: true }
          ).then((dbThoughtData) =>
            !dbThoughtData
              ? res.status(404).json({ message: "error. No thoughts!" })
              : res.json(dbThoughtData)
          );
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // delete thought by its ID
  deleteThoughts(req, res) {
    Thoughts.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID." })
          : User.findOneAndUpdate(
            { username: thought.username },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          )
      )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: "Thought deleted, but no user found" })
          : res.json({ message: "Thought deleted." })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // change thought by its ID
  updateThoughts(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //add reaction
  addReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "error with thought!" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // delete reaction
  deleteReaction(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: "No reaction found with that ID" })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
};