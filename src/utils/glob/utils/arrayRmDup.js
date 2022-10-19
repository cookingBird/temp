export default function (source = [],key = 'id') {
  if (!Array.isArray(source)) {
    throw Error('arrayRmDup input error',source);
  }
  const result = {};
  source.forEach(item => {
    result[item.key] = item;
  })
  return Object.keys(result).map(key => result[key]);
}
