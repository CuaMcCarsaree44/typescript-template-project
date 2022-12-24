/**
 * WRITING TEST
 *
 * You can specify every unit Tests in here.
 */
test("[POSITIVE] Should be return true", () => {
  expect(1 + 1 == 2)
    .toBe(true);
});

test("[NEGATIVE] Should be return false", () => {
  expect(() => {
    1 + 1 == 3
  })
    .toBe(false);
});

