export default function deepMerge (source,target) {
  const _toString = Object.prototype.toString;
  if (_toString.call(source) != _toString.call(target)) {
    return source;
  };
  if (/'[object (String|Number|Boolean|Null|Undefined)]'/.test(_toString.call(source))) {
    return target;
  }
  if (_toString.call(source) === '[object Array]') {
    return source.map((element,index) => {
      deepMerge(element,target[index])
    });
  }
  const result = {};
  for (let key in source) {
    result[key] = deepMerge(source[key],target[key])
  }
  return {
    ...target,
    ...result
  }
}
