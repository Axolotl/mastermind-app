const Score = require('../models').Score;

module.exports = {
  create(req, res) {
    return Score
      .create({
        name: req.body.name,
        score: req.body.score,
      })
      .then(score => res.status(201).send(score))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Score
      .findAll()
      .then((scores) => res.status(200).send(scores))
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Score
      .findById(req.params.scoreId)
      .then(score => {
        if (!score) {
          return res.status(400).send({
            message: 'Score Not Found',
          });
        }
        return score
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};