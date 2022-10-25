export const narcissistic = (value: number): boolean => {
  return (
    [...value.toString()].reduce(
      (acc: number, curr: any, _: any, arr: any[]) =>
        (acc += curr ** arr.length),
      0
    ) === value
  );
};
