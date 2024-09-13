export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPrimeNumber = (min: number, max: number) => {
  return Number((Math.random() * (max - min) + min).toFixed(1));
};
