import * as Validator from "../validType"
/**
 * 树结构映射
 * @param {object} root 根节点
 * @param {function} mapFun 映射
 * @param {object} mapProps 属性映射
 * @param {string|function} mapProps.children children属性映射
 * @param {string|function} mapProps.childrenKey children field映射
 */
export default function mapTree (root,mapFun,mapOptions) {
  if (!root || Validator.isArray(root) || Validator.isString(root) || Validator.isNumber(root)) {
    throw Error('root type error',root)
  }
  const isMapFunctionIllegal = Validator.isFunction(mapFun);
  const mapRes = isMapFunctionIllegal ? mapFun(root) : root;
  const resultIllegal = Validator.isObject(mapRes);
  if (!resultIllegal) {
    throw Error('mapFun returnType error',mapFun,root,mapRes)
  }
  const childrenOptions = mapOptions.children;
  const children = Validator.isString(childrenOptions)
    ? root[childrenOptions]
    : Validator.isFunction(childrenOptions)
      ? childrenOptions(root)
      : root.children;
  const childrenKey = mapOptions.childrenKey || 'children';
  if (children) {
    if (Validator.isString(childrenKey)) {
      return {
        ...Object.assign({},mapRes),
        [childrenKey]: children?.map(child => mapTree(child,mapFun,mapOptions)) || [],
      }
    } else if (Validator.isFunction(childrenKey)) {
      return {
        ...Object.assign({},mapRes),
        [childrenKey(root)]: children?.map(child => mapTree(child,mapFun,mapOptions)) || [],
      }
    } else {
      console.error('mapTree param options.childrenKey type error',childrenKey)
      throw Error('mapTree param options.childrenKey type error')
    }
  } else {
    return mapRes;
  }
}
