const Thought = require('../models/Thought');
const User = require('../models/User');
const mongoose = require('mongoose');


const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: 'Thought not found' });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createThought(req, res) {
    User.findOne({ username: { $regex: new RegExp(req.body.username, "i") } })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "User not found" });
          return;
        }
  
        return Thought.create(req.body)
          .then((thoughtData) => {
            // Push the created thought's _id to the associated user's thoughts array field
            return User.findOneAndUpdate(
              { _id: userData._id },
              { $push: { thoughts: thoughtData._id } },
              { new: true }
            );
          })
          .then(() => {
            res.json({ message: "Thought created" });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, { new: true })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: 'Thought not found' });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: 'Thought not found' });
          return;
        }
        res.json({ message: 'Thought deleted' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: 'Thought not found' });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    const { thoughtId, reactionId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(thoughtId) || !mongoose.Types.ObjectId.isValid(reactionId)) {
      res.status(400).json({ message: 'Invalid thoughtId or reactionId' });
      return;
    }

    Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: { reactions: { reactionId: reactionId } } },
      { new: true }
    )
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: 'Thought not found' });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};
  
module.exports = thoughtController;