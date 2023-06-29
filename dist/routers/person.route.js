"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var people_controller_1 = require("controllers/people.controller");
var express_1 = require("express");
var peopleRoute = (0, express_1.Router)();
peopleRoute.get("/people", people_controller_1.getPeople);
exports.default = peopleRoute;
