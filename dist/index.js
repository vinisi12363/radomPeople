"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var index_route_1 = __importDefault(require("../src/routers/index.route"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(index_route_1.default);
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Servidor rodando na porta ".concat(port));
});
