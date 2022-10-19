export default function (source, ...keys) {
  return Object.keys(source).reduce((pre, cur) => {
    if (keys.includes(cur)) {
      return pre;
    }
    return {
      ...pre,
      [cur]: source[cur],
    };
  }, {});
}
