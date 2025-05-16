import { calcDateOnDiet, Sex } from "./tanzverbot-diet";

test("Tanzverbot Diet Man", () => {
  expect(calcDateOnDiet(74, 100, 1.86, 38, Sex.Male)).toBeGreaterThan(0);
});




test("Tanzverbot Diet Frau", () => {
  expect(calcDateOnDiet(60, 65, 1.75, 25, Sex.Female)).toBe(7);
});


test("Tanzverbot Diet Radschützenpanzer", () => {
  expect(calcDateOnDiet(235, 360, 1.60, 30, Sex.Male)).toBe(249);
});