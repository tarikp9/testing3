const sum = require("./sketch");

/* test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
 */

test("adds 1 + 1 to equal 2 ", sumTest);

function sumTest() {
  expect(sum(1, 1)).toBe(2);
}
