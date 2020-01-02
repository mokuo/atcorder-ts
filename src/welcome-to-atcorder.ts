export const run = (input: string) => {
  const lines = input.split("\n");
  const a = lines[0];
  const bc = lines[1].split(" ");
  const b = bc[0];
  const c = bc[1];
  const s = lines[2];
  const sum = Number(a) + Number(b) + Number(c);
  return `${sum} ${s}`;
};
