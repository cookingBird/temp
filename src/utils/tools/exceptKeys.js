export default function (source, ...keys) {
  const allKeys = keys.reduce((pre, cur) => {
    return {
      ...pre,
      [cur]: true,
    };
  }, {});
  return Object.keys(source).reduce((pre, cur) => {
    if (allKeys[cur]) {
      return pre;
    }
    return {
      ...pre,
      [cur]: source[cur],
    };
  }, {});
}
