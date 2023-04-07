//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import { chickensToReturn, missingChickens } from "./main.js";

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
test("returned chickens test one", function () {
  const testCaseOne = [1, 6, 6, 2];
  const actual = chickensToReturn(testCaseOne);
  const expected = "15";

  expect(actual).toMatch(expected);
});

test("returned chickens test two", function () {
  const testCaseTwo = [7, 2, 3, 1];
  const actual = chickensToReturn(testCaseTwo);
  const expected = "13";

  expect(actual).toMatch(expected);
});
test("returned chickens test three", function () {
  const testCaseThree = [2, 9, 10, 6];
  const actual = chickensToReturn(testCaseThree);
  const expected = "27";

  expect(actual).toMatch(expected);
});
test("returned chickens test four", function () {
  const testCaseFour = [4, 4, 3];
  const actual = chickensToReturn(testCaseFour);
  const expected = "11";

  expect(actual).toMatch(expected);
});
test("returned chickens test five", function () {
  const testCaseFive = [1, 6, 6, 2, 9];
  const actual = chickensToReturn(testCaseFive);
  const expected = "24";

  expect(actual).toMatch(expected);
});
