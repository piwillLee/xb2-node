"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.store = exports.index = void 0;
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
const store = async (request, response, next) => {
    const { title, content } = request.body;
    try {
        const data = await (0, post_service_1.createPost)({ title, content });
        response.status(201).send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.store = store;
const update = async (request, response, next) => {
    const { postId } = request.params;
    const { title, content } = request.body;
    try {
        const data = await (0, post_service_1.updatePost)(parseInt(postId, 10), { title, content });
        response.send(data);
    }
    catch (error) {
        next(error);
    }
};
exports.update = update;
//# sourceMappingURL=post.controller.js.map