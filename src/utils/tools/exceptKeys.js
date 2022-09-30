export default function (source, ...keys) {
  const allKeys = keys.reduce((pre, cur) => ({
    ...pre,
    [cur]: true,
  }), {});
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
