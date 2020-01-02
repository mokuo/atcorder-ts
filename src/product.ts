export const run = (input: string) => {
  const nums = input.split(" ");
  const result = Number(nums[0]) * Number(nums[1]);
  return result % 2 === 0 ? "Even" : "Odd";
};
