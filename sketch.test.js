const sum = require("./sketch");

/* test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
 */

test("adds 5 + 5 to equal 10 ", sumTest);

function sumTest() {
  expect(sum(5, 5)).toBe(10);
}
