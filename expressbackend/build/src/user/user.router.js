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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user = __importStar(require("./user"));
var log_1 = __importDefault(require("../log"));
var constant_1 = __importDefault(require("../constant"));
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
    log_1.default.debug('right here', req.body);
    user.login(req.body.username, req.body.password).then(function (user) {
        if (user === null) {
            res.sendStatus(401);
        }
        req.session.user = user;
        res.send(JSON.stringify(user));
    });
});
exports.default = router;
