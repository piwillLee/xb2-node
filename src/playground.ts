const nature = () => {
  console.log("...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("test1");
    }, 2000);
  });
};

nature().then((data) => {
  console.log(data);
});

console.log("test2");
