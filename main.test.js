//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import { chickensToReturn } from "./main.js";

// Test Ideas
/* 
  1. Is the outcome a string?
  2. Is the outcome a number?
  3. Is the outcome the correct number
*/

// Test test
test("chickensToReturn function exists", function () {
  expect(chickensToReturn).toBeDefined();
});

// String Test
test("returned string", function () {
  expect(typeof chickensToReturn(missingChickens)).toBe("string");
});

// Array Tests

const missingChickens = [
  [1, 6, 6, 2],
  [7, 2, 3, 1],
  [2, 9, 10, 6],
  [4, 4, 3],
  [1, 6, 6, 2, 9],
];

test("returned chickens test one", function () {
  const actual = chickensToReturn(missingChickens[0]);
  const expected = "15";

  expect(actual).toMatch(expected);
});

test("returned chickens test two", function () {
  const actual = chickensToReturn(missingChickens[1]);
  const expected = "13";

  expect(actual).toMatch(expected);
});
test("returned chickens test three", function () {
  const actual = chickensToReturn(missingChickens[2]);
  const expected = "27";

  expect(actual).toMatch(expected);
});
test("returned chickens test four", function () {
  const actual = chickensToReturn(missingChickens[3]);
  const expected = "11";

  expect(actual).toMatch(expected);
});
test("returned chickens test five", function () {
  const actual = chickensToReturn(missingChickens[4]);
  const expected = "24";

  expect(actual).toMatch(expected);
});
