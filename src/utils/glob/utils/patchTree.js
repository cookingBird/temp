import * as Validator from "../validType";
/**
 *
 * @param {*} source
 * @param {*} target
 * @param {*} patchFunc
 * @param {*} sourceChildrenKey
 * @param {*} targetChildrenKey
 * @returns
 */
export default function patchTree (target,source,patchFunc,targetChildrenKey,sourceChildrenKey) {
  if (!Validator.isFunction(patchFunc)) {
    return;
  } else {
    patchFunc(target,source);
    const sourceChildren = Validator.isFunction(sourceChildrenKey)
      ? sourceChildrenKey(source)
      : Validator.isString(sourceChildrenKey)
        ? source[sourceChildrenKey]
        : source.children
          ? source.children
          : [];
    const targetChildren = Validator.isFunction(targetChildrenKey)
      ? targetChildrenKey(target)
      : Validator.isString(targetChildrenKey)
        ? target[targetChildrenKey]
        : target.children
          ? target.children
          : [];
    targetChildren.forEach(
      (tar,i) => patchTree(tar,sourceChildren[i],patchFunc,targetChildrenKey,sourceChildrenKey))
  }
}
