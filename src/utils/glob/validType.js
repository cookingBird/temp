const _toString = Object.prototype.toString;
const typeMap = {
  number: '[object Number]',
  string: '[object String]',
  boolean: '[object Boolean]',
  undefined: '[object Undefined]',
  null: '[object Null]',
  object: '[object Object]',
  array: '[object Array]',
  body: '[object HTMLBodyElement]',
  element: '/[object HTML\w+Element]/',
};
export function isString(t) {
  return _toString.call(t) === typeMap.string;
}

export function isNumber(t) {
  return _toString.call(t) === typeMap.number;
}

export function isBoolean(t) {
  return _toString.call(t) === typeMap.boolean;
}

export function isUndefined(t) {
  return _toString.call(t) === typeMap.undefined;
}

export function isNull(t) {
  return _toString.call(t) === typeMap.null;
}

export function isObject(t) {
  return _toString.call(t) === typeMap.object;
}

export function isArray(t) {
  return _toString.call(t) === typeMap.array;
}

export function isBody(t) {
  return _toString.call(t) === typeMap.element;
}

export function isElement(t) {
  return new RegExp(typeMap.element).test(_toString.call(t));
}
