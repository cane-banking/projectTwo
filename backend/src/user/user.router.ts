import express from 'express';
import * as user from './user';
import logger from '../log';
import publicDir from '../constant';
import userService from './user.service';

const router = express.Router();


router.get('/login', function(req: any, res, next) {
  if(req.session.user) {
    console.log(req.session.user);
    res.redirect('/');
  }
  res.sendFile('login.html', {root: publicDir});
});

router.get('/', (req: any, res, next) => {
  let u = {...req.session.user};
  logger.debug(u);
  if(u.name) {
    res.send(JSON.stringify(u));
  } else {
    res.sendStatus(401);
  }
});

router.get('/logout', (req, res, next) => {
  req.session.destroy((err)=> logger.error(err));
  res.redirect('/');
});

router.delete('/', (req, res, next) => {
  req.session.destroy((err) => logger.error(err));
  res.sendStatus(204);
})

router.post('/', function(req: any, res, next) {
  logger.debug(req.body);
  userService.addUser(req.body).then((data) => {
    logger.debug(data);
    res.send(201);
  }).catch((err) => {
    res.sendStatus(500);
  })
});

export default router;
