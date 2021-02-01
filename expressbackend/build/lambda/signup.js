"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.handler = void 0;
var AWS = __importStar(require("aws-sdk"));
var pg_1 = require("pg");
var docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-west-2',
    endpoint: 'http://dynamodb.us-west-2.amazonaws.com'
});
var handler = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var user, resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = JSON.parse(event.body);
                return [4 /*yield*/, addUser(user)];
            case 1:
                resp = _a.sent();
                addCustomerPg(user);
                console.log;
                if (resp) {
                    return [2 /*return*/, { statusCode: 204, headers: {
                                "Access-Control-Allow-Headers": "Content-Type",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                            }, body: JSON.stringify(user) }];
                }
                else {
                    return [2 /*return*/, { statusCode: 400 }];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.handler = handler;
function addCustomerPg(customer) {
    return __awaiter(this, void 0, void 0, function () {
        var client, query, values, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new pg_1.Client();
                    client.connect();
                    query = "insert into checks (\n                                   customer_id,\n                                   firstname,\n                                   lastname) values ($1, $2, $3)";
                    values = [
                        customer.customer_id,
                        customer.firstname,
                        customer.lastname
                    ];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.query(query, values)];
                case 2:
                    response = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4:
                    console.log(response);
                    client.end();
                    return [2 /*return*/, response];
            }
        });
    });
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        // TableName - the name of the table we are sending it to
                        TableName: 'users',
                        // Item - the object we are sending
                        Item: user,
                        ConditionExpression: '#customer_id <> :customer_id',
                        ExpressionAttributeNames: {
                            '#customer_id': 'customer_id'
                        },
                        ExpressionAttributeValues: {
                            ':customer_id': user.customer_id
                        }
                    };
                    return [4 /*yield*/, docClient.put(params).promise().then(function () {
                            return true;
                        }).catch(function (error) {
                            return false;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var User = /** @class */ (function () {
    function User(customer_id, username, firstname, lastname, password, role, email) {
        this.customer_id = customer_id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.role = 'customer';
        if (role) {
            this.role = role;
        }
    }
    ;
    return User;
}());
exports.User = User;
