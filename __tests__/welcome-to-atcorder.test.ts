import { run } from "../src/welcome-to-atcorder";

describe("PracticeA - Welcome to AtCoder", () => {
  it("example 1", () => {
    const input = `1
2 3
test`;
    const output = run(input);
    expect(output).toBe("6 test");
  });

  it("example 2", () => {
    const input = `72
128 256
myonmyon`;
    const output = run(input);
    expect(output).toBe("456 myonmyon");
  });
});
