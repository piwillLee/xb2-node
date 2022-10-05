const fs = require("fs");
const path = require("path");

/**
 * 读取密钥文件
 */
const privateKey = fs.readFileSync(path.join("config", "private.Key"));
const publicKey = fs.readFileSync(path.join("config", "public.Key"));

/**
 * 转换成 Base64 格式
 */
const privateKeyBase64 = Buffer.from(privateKey).toString("base64");
const publicKeyBase64 = Buffer.from(publicKey).toString("base64");

/**
 * 输出转换结果
 */
console.log("\nPrivate key");
console.log(privateKeyBase64);

console.log("\nPublic key");
console.log(publicKeyBase64);
