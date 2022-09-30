const nature = (callback) => {
  const data = "test";
  callback(data);
};

nature((data) => {
  console.log(data);
});
