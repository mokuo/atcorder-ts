import { run } from "../src/product";

describe("ABC086A - Product", () => {
  it("example 1", () => {
    const input = `3 4`;
    const output = run(input);
    expect(output).toBe("Even");
  });

  it("example 2", () => {
    const input = `1 21`;
    const output = run(input);
    expect(output).toBe("Odd");
  });
});
