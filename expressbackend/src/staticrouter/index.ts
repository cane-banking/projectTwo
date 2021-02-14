import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

export default router;