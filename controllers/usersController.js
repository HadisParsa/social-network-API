const { User } = require("../models");

module.exports = {
  //get all USERs
  getAllUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  //create a new USER 
  createUsers(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  //get a user with _id 
  getUsersById(req, res) {
    User.findOne({ _id: req.params.id })
      .select('-__v')
      .then((user) =>
        !user ?
          res.status(404).json({ message: "No user with this ID" }) :
          res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //update a user with id 
  updateUsers(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
      .then((user) =>
        !user ?
          res.status(404).json({ message: 'No user with this ID!' }) :
          res.json({ message: "User information has been updated." })

        // :res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //delete a user with id
  deleteUsers(req, res) {
    User.findOneAndRemove({ _id: req.params.id })
      .then((user) =>
        !user ?
          res.status(404).json({ message: "No user with this ID." }) :
          res.json({ message: "User has been deleted" })
        // :res.json(user)
      )
      .catch((err) => res.status(500).json(err))
  },

  //add a new friend with users id
  addFriend(req, res) {
    console.log("A friend is addind.");
    console.log(req.body);
    User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { runValidators: true, new: true })
      .then((user) =>
        !user ?
          res
            .status(404)
            .json({ message: "No user found with this ID!" }) :
          res.json({ message: "A new friend has been added." })
      )
      .catch((err) => res.status(500).json(err));
  },

  //delete a friend from a users friend list
  deleteFriend(req, res) {
    console.log("A friend are removing!");
    console.log(req.body);
    User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { runValidators: true, new: true })
      .then((user) =>
        !user ?
          res.status(404).json({ message: "No friend found with this ID." }) :
          res.json({ message: "A friend has been removd." })
      )
      .catch((err) => res.status(500).json(err));
  }
}

