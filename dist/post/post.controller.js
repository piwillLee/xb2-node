"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const post_service_1 = require("./post.service");
const index = async (request, response, next) => {
    try {
        const posts = await (0, post_service_1.getPosts)();
        response.send(posts);
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
//# sourceMappingURL=post.controller.js.map