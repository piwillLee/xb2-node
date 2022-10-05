# 小白兔的开发之旅

## 生成密钥与公钥

、、、
cd config //切换到 config 文件
openssl
genrsa -out private.key 4096 //生成密钥
rsa -in private.key -pubout -out public.key //生成公钥
exitv
、、、
