const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
const pluralize = (singular: string, count: number): string => `${singular}${count === 1 ? 's' : ''}`;

export {
  capitalize,
  pluralize,
};
