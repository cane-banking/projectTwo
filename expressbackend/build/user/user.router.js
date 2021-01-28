"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var log_1 = __importDefault(require("../log"));
var constant_1 = __importDefault(require("../constant"));
var user_service_1 = __importDefault(require("./user.service"));
var router = express_1.default.Router();
/* GET users listing. */
router.get('/login', function (req, res, next) {
    // If I'm already logged in, why would I log in again?
    if (req.session.user) {
        console.log(req.session.user);
        res.redirect('/');
    }
    res.sendFile('login.html', { root: constant_1.default });
});
router.get('/', function (req, res, next) {
    var u = __assign({}, req.session.user);
    log_1.default.debug(u);
    //delete u.password;
    //res.send(JSON.stringify(u));
    if (u.name) {
        res.send(JSON.stringify(u));
    }
    else {
        res.sendStatus(401); // unauthorized
    }
});
// Legacy route, do not use.
router.get('/logout', function (req, res, next) {
    req.session.destroy(function (err) { return log_1.default.error(err); });
    res.redirect('/');
});
// Much more restful
router.delete('/', function (req, res, next) {
    req.session.destroy(function (err) { return log_1.default.error(err); });
    res.sendStatus(204);
});
router.post('/', function (req, res, next) {
    log_1.default.debug(req.body);
    user_service_1.default.addUser(req.body).then(function (data) {
        log_1.default.debug(data);
        res.send(201);
    }).catch(function (err) {
        res.sendStatus(500);
    });
});
/* router.post('/', function(req: any, res, next) {
  logger.debug('right here',req.body);
  user.login(req.body.username, req.body.password).then((user) => {
    if(user === null) {
      res.sendStatus(401);
    }
    req.session.user = user;
    res.send(JSON.stringify(user))
  });
}); */
exports.default = router;
