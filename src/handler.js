const handler = (arr) => {
  if (arr.length <= 1 || arr.some((item) => typeof item !== 'number') || arr.includes(NaN)) {
    return null;
  }
  return arr
  .slice()
  .sort((a, b) => a - b)
  .slice(0, 2)
  .reduce((a, b) => a + b);
};

export default handler;
