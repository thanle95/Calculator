export const add = (x) => {
  return {
    label: `+${x}`,
    func: (y) => y + x,
  };
};
export const subtract = (x) => {
  return {
    label: `-${x}`,
    func: (y) => y - x,
  };
};
export const multiply = (x) => {
  return {
    label: `*${x}`,
    func: (y) => y * x,
  };
};
export const divide = (x) => {
  return {
    label: `/${x}`,
    func: (y) => y / x,
  };
};
