/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Creature from '../models/creature';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Creature.find((err, creatures) => res.send({ creatures }));
});

router.get('/:id', (req, res) => {
  //return a specific weapon
});

router.post('/', (req, res) => {
  console.log("POST TO CREATURES!!");
  const c = new Creature(req.body);
  c.save(() => {
    res.send({ c });
  });
});
