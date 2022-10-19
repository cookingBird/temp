export default function (tar) {
  const isPrimaryValue = (e) => (/\[object (Number|String|Boolean)\]/g).test(e);
  const isNull = (e) => (/\[object Null\]/g).test(e);
  const isUndefined = (e) => (/\[object Undefined\]/g).test(e);
  const isArray = (e) => (/\[object Array\]/g).test(e);
  const isObject = (e) => (/\[object Object\]/g).test(e);
  const type = Object.prototype.toString.call(tar);
  if (isUndefined(type)) return void 0;
  if (isNull(type)) return null;
  if (isPrimaryValue(type)) return tar;
  if (isArray(type)) return tar.map(deepClone);
  const res = {};
  if (isObject(type)) {
    for (const key in tar) {
      res[key] = deepClone(tar[key]);
    }
    return res;
  }
}
