/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Weapon from '../models/weapon';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Weapon.find((err, weapons) => res.send({ weapons }));
});

router.get('/:id', (req, res) => {
  //return a specific weapon
});

router.post('/', (req, res) => {
  const w = new Weapon(req.body);
  w.save(() => {
    res.send({ w });
  });
});
