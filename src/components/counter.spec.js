import counter from "./counter";

test("INCREMENT - 1", () => {
  expect(counter(0, { type: "INCREMENT" })).toBe(1);
});

test("INCREMENT - 2", () => {
  expect(counter(1, { type: "INCREMENT" })).toBe(2);
});

test("DECREMENT - 1", () => {
  expect(counter(2, { type: "DECREMENT" })).toBe(1);
});

test("DECREMENT - 2", () => {
  expect(counter(1, { type: "DECREMENT" })).toBe(0);
});

test("undefined action", () => {
  expect(counter(undefined, {})).toBe(0);
});
