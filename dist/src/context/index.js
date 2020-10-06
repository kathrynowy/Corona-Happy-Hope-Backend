"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const path = require("path");
const defaultConfig = require("../../config/development.json");
const configDir = path.resolve(__dirname, '../../config');
config.util.setModuleDefaults('NODE_ENV', config.util.loadFileConfigs(configDir));
const dbConfig = config.get('NODE_ENV').dbConfig;
/* tslint:disable:no-console */
const connectWithRetry = () => {
    mongoose
        .connect(dbConfig.uri || defaultConfig.dbConfig.uri, { useNewUrlParser: true })
        .then(() => __awaiter(void 0, void 0, void 0, function* () { return console.log('Connection to DB established successfully', dbConfig.uri); }))
        .catch((error) => {
        console.log('Connection to DB failed', error);
        setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();
autoIncrement.initialize(mongoose.connection);
exports.default = mongoose;
//# sourceMappingURL=index.js.map