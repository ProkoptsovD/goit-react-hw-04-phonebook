export const theme = {
  spacing: (...value) => value.map(v => `${v * 4}px`).join` `,
};
