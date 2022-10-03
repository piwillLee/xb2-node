"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = void 0;
const mysql_1 = require("../app/database/mysql");
const getPosts = async () => {
    const statement = `
    SELECT * FROM post
  `;
    const [data] = await mysql_1.connection.promise().query(statement);
    return data;
};
exports.getPosts = getPosts;
//# sourceMappingURL=post.service.js.map