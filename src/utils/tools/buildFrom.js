export default function (source, origin) {
  const _toString = Object.prototype.toString;
  if (
    source
    && origin
    && _toString.call(source) === '[object Object]'
    && _toString.call(origin) === '[object Object]'
  ) {
    return Object.keys(origin).reduce((pre, cur) => ({
      ...pre,
      [cur]: source[cur],
    }), {});
  }
}
