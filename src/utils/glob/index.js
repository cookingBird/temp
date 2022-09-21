
import * as validate from './validType';
export default {
  install (vue) {
    Object.defineProperty(vue.prototype,'$utils',{
      get () {
        return validate;
      },
      enumerable: false,
    })
  }
}
