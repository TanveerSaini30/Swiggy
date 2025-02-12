import { sum } from "../../sum";

test("sum", () => {
  const result = sum(2, 4);

  expect(result).toBe(6);
});
