import * as Validator from "../validType"
export default function (source,prop) {
  if (!Validator.isObject(source)) {
    console.error('executeProp source error',source);
    throw Error('executeProp source error');
  }

  if (Validator.isUndefined(prop) || Validator.isNull(prop)) {
    return void 0;
  } else if (Validator.isString(prop) || Validator.isSymbol(prop)) {
    if (Validator.isString(prop) && prop.length === 0) {
      return void 0;
    } else {
      return source[prop]
    }
  } else if (Validator.isFunction(prop)) {
    return prop(source)
  } else {
    return void 0;
  }
}
