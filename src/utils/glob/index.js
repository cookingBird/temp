
import * as validator from './validType';
import exceptKeys from './utils/exceptKeys';
import expectKeys from './utils/expectKeys';
import deepClone from './utils/deepClone';
import buildFrom from './utils/buildFrom';
import deepMerge from './utils/deepMerge';
import arrayRmDup from './utils/arrayRmDup';
import fromPropsValue from './utils/fromPropsValue';
import mapTree from './utils/mapTree';
import patchTree from './utils/patchTree';
import { flattenTree } from './utils/flattenTree';
import executeProp from './utils/executeProp';
export default {
  install (vue) {
    Object.defineProperty(vue.prototype,'$utils',{
      get () {
        return {
          ...validator,
          exceptKeys,
          expectKeys,
          deepClone,
          buildFrom,
          deepMerge,
          arrayRmDup,
          fromPropsValue,
          mapTree,
          patchTree,
          flattenTree,
          executeProp
        };
      },
      enumerable: false,
    })
  }
}
