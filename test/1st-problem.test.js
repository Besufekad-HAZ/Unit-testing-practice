// First problem String Length test

const stringLen = require("../1st-problem");


test("The string has 10 characters", () => {
  expect(stringLen("howareu")).toBe(7);
});

test("The string has too many characters", () => {
  expect(() => stringLen("unittestingpractice")).toThrow(Error);
});

test("The string is too short", () => {
  expect(() => stringLen("")).toThrow(Error);
});