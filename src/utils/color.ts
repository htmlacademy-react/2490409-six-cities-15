const calculateBrightness = (value: number) => Math.floor(((Math.sin(value) + 1) * 49));

const numberToColor = (value: number) => {
  const calculatedBrightness = value.toString(10);
  const preparedBrightness = calculatedBrightness.length < 2 ? `0${calculatedBrightness}` : calculatedBrightness;

  return `#${preparedBrightness}${preparedBrightness}${preparedBrightness}`;
};

const calcNextColorChannelValue = (currentChannelValue: number, steps: number) => currentChannelValue + Math.PI / steps;

const calcEaseWhiteBlackColor = (currentChannelValue: number): string => numberToColor(calculateBrightness(currentChannelValue));

export {
  calcNextColorChannelValue,
  calcEaseWhiteBlackColor,
};
