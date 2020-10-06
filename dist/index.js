"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const server_1 = require("./server");
const context_1 = require("./src/context");
const server = new http.Server(server_1.default);
const port = process.env.PORT || 7000;
context_1.default.connection.on('open', () => {
    server.listen(port, () => console.log(`Server is starting on port - ${port}`));
});
//# sourceMappingURL=index.js.map