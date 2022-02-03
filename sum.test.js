const sum = require("./sum");
const data = require("./data");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Object assignment", () => {
  const newData = Object.assign(data, {});

  newData["four"] = 4;
  console.log(newData);
  expect(data).toEqual(newData);
});
