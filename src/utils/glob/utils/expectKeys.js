export default function (source,...keys) {
  if (!keys?.length) return source;
  return keys.reduce((pre,cur) => ({
    ...pre,
    [cur]: source[cur],
  }),{});
}
