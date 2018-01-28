import counter from "./counter";

test("test INCREMENT - 1", () => {
  expect(counter(0, "INCREMENT")).toBe(1);
});

test("test INCREMENT - 2", () => {
  expect(counter(1, "INCREMENT")).toBe(2);
});

test("test DECREMENT - 1", () => {
  expect(counter(2, "DECREMENT")).toBe(1);
});

test("test DECREMENT - 2", () => {
  expect(counter(1, "DECREMENT")).toBe(0);
});
