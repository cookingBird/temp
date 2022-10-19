import { Message } from 'element-ui';
export * from './notify';

/**
 * message弹窗
 * @param {string} text 显示的文本
 * @param {object} options 传入的参数
 * @param {number} options.duration 持续时间
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {boolean} options.center 文字是否居中
 * @param {number} options.offset 弹框距顶部距离
 * @param {boolean} options.html 是否以v-html方式显示text文本
 * @returns {Promise}
 */
export function errorMsg(text, duration = 500, options = {}) {
  const { html, showClose, center, offset } = options;
  return new Promise((resolve, reject) => {
    Message({
      type: 'error',
      message: text,
      duration,
      onClose: resolve,
      showClose,
      center,
      offset,
      dangerouslyUseHTMLString: html,
    });
  });
}

/**
 * message弹窗
 * @param {string} text 显示的文本
 * @param {object} options 传入的参数
 * @param {number} options.duration 持续时间
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {boolean} options.center 文字是否居中
 * @param {number} options.offset 弹框距顶部距离
 * @param {boolean} options.html 是否以v-html方式显示text文本
 * @returns {Promise}
 */
export function successMsg(text, duration = 500, options = {}) {
  const { html, showClose, center, offset } = options;
  return new Promise((resolve, reject) => {
    Message({
      type: 'success',
      message: text,
      duration,
      onClose: resolve,
      showClose,
      center,
      offset,
      dangerouslyUseHTMLString: html,
    });
  });
}

/**
 * message弹窗
 * @param {string} text 显示的文本
 * @param {object} options 传入的参数
 * @param {number} options.duration 持续时间
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {boolean} options.center 文字是否居中
 * @param {number} options.offset 弹框距顶部距离
 * @param {boolean} options.html 是否以v-html方式显示text文本
 * @returns {Promise}
 */
export function infoMsg(text, duration = 500, options = {}) {
  const { html, showClose, center, offset } = options;
  return new Promise((resolve, reject) => {
    Message({
      type: 'info',
      message: text,
      duration,
      onClose: resolve,
      showClose,
      center,
      offset,
      dangerouslyUseHTMLString: html,
    });
  });
}
/**
 * message弹窗
 * @param {string} text 显示的文本
 * @param {object} options 传入的参数
 * @param {number} options.duration 持续时间
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {boolean} options.center 文字是否居中
 * @param {number} options.offset 弹框距顶部距离
 * @param {boolean} options.html 是否以v-html方式显示text文本
 * @returns {Promise}
 */
export function warningMsg(text, duration = 500, options = {}) {
  const { html, showClose, center, offset } = options;
  return new Promise((resolve, reject) => {
    Message({
      type: 'warning',
      message: text,
      duration,
      onClose: resolve,
      showClose,
      center,
      offset,
      dangerouslyUseHTMLString: html,
    });
  });
}
