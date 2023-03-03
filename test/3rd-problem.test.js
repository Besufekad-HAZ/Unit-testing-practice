const Calculator = require("../3rd-problem");

const calc = new Calculator();

describe("calculator", () => {
  describe("add", () => {
    test("add two numbers 1", () => {
      expect(calc.add(5, 2)).toBe(7);
    });
    test("add two numbers 2", () => {
      expect(calc.add(12, 3)).toBe(15);
    });
  });
  describe("subtract", () => {
    test("subtract two numbers 1", () => {
      expect(calc.subtract(13, 7)).toBe(6);
    });
    test("subtract two numbers 2", () => {
      expect(calc.subtract(12, 2)).toBe(10);
    });
  });
  describe("multiply", () => {
    test("multiply two numbers test 1", () => {
      expect(calc.multiply(-4, 2)).toBe(-8);
    });
    test("multiply two numbers test 2", () => {
      expect(calc.multiply(2, 8)).toBe(16);
    });
  });
  describe("divide", () => {
    test("divide two numbers test 1", () => {
      expect(calc.divide(12, 3)).toBe(4);
    });
    test("divide two numbers test 2", () => {
      expect(calc.divide(28, 4)).toBe(7);
    });
  });
});
