import { add, divide, multiply, subtract } from "./index.js";

test("returns '5' if called add(2,3);", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns 'a negative value' if called add(2,-5);", () => {
  const result = add(2, -5);
  expect(result).toBeLessThan(0);
});

test("returns 'a value close to 0.3' if called add(0.1,0.2);", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("returns '10' if called subtract(15,5);", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns 'a negative value' if called subtract(2,3);", () => {
  const result = subtract(2, 3);
  expect(result).toBeLessThan(0);
});

test("returns '8' if called multiply(2,4);", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns 'a negative value' if called multiply(-2,3);", () => {
  const result = multiply(-2, 3);
  expect(result).toBeLessThan(0);
});

test("returns 'a negative value' if called multiply(2,-3);", () => {
  const result = multiply(2, -3);
  expect(result).toBeLessThan(0);
});

test("returns 'a positive value' if called multiply(-2,-3);", () => {
  const result = multiply(-2, -3);
  expect(result).toBeGreaterThan(0);
});

test("returns '3' if called divide(9,3);", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns 'You should not do this!' if called divide(9,0);", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
