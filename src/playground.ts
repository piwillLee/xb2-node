const nature = () => {
  console.log("...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("test1");
    }, 2000);
  });
};

const demo = async () => {
  const data = await nature();
  console.log(data);
};

demo();

console.log("test2");
