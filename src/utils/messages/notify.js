import { Notification } from 'element-ui';

/**
 * 成功的 notification （element-ui）
 * @param {string} message 现实的消息
 * @param {number} duration 消息的持续时间
 * @param {object} options 其他选项
 * @param {string} options.title 消息标题
 * @param {boolean} options.html 是否以v-html插入message
 * @param {string} options.customClass 自定义类名
 * @param {string} options.iconClass icon类名
 * @param {string} options.position 位置(top-right|top-left|bottom-right|bottom-left)
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {number} options.offset 多个notification之间的间隔
 * @returns {Promise} 关闭时触发成功回调，点击时触发失败回调
 */
export function successNotify (message,duration = 100,options = {}) {
  const { title,html,customClass,iconClass,position,showClose,offset } = options;
  return new Promise(function (resolve,reject) {
    Notification({
      type: 'success',
      title,
      message,
      duration,
      dangerouslyUseHTMLString: html,
      customClass,
      iconClass,
      position,
      showClose,
      onClose: resolve,
      onClick: reject,
      offset,
    });
  });
}

/**
 * 失败的 notification （element-ui）
 * @param {string} message 现实的消息
 * @param {number} duration 消息的持续时间
 * @param {object} options 其他选项
 * @param {string} options.title 消息标题
 * @param {boolean} options.html 是否以v-html插入message
 * @param {string} options.customClass 自定义类名
 * @param {string} options.iconClass icon类名
 * @param {string} options.position 位置(top-right|top-left|bottom-right|bottom-left)
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {number} options.offset 多个notification之间的间隔
 * @returns {Promise} 关闭时触发成功回调，点击时触发失败回调
 */
export function errorNotify (message,duration = 100,options = {}) {
  const { title,html,customClass,iconClass,position,showClose,offset } = options;
  return new Promise(function (resolve,reject) {
    Notification({
      type: 'error',
      title,
      message,
      duration,
      dangerouslyUseHTMLString: html,
      customClass,
      iconClass,
      position,
      showClose,
      onClose: resolve,
      onClick: reject,
      offset,
    });
  });
}
/**
 * info notification （element-ui）
 * @param {string} message 现实的消息
 * @param {number} duration 消息的持续时间
 * @param {object} options 其他选项
 * @param {string} options.title 消息标题
 * @param {boolean} options.html 是否以v-html插入message
 * @param {string} options.customClass 自定义类名
 * @param {string} options.iconClass icon类名
 * @param {string} options.position 位置(top-right|top-left|bottom-right|bottom-left)
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {number} options.offset 多个notification之间的间隔
 * @returns {Promise} 关闭时触发成功回调，点击时触发失败回调
 */
export function infoNotify (message,duration = 100,options = {}) {
  const { title,html,customClass,iconClass,position,showClose,offset } = options;
  return new Promise(function (resolve,reject) {
    Notification({
      type: 'error',
      title,
      message,
      duration,
      dangerouslyUseHTMLString: html,
      customClass,
      iconClass,
      position,
      showClose,
      onClose: resolve,
      onClick: reject,
      offset,
    });
  });
}

/**
 * warning notification （element-ui）
 * @param {string} message 现实的消息
 * @param {number} duration 消息的持续时间
 * @param {object} options 其他选项
 * @param {string} options.title 消息标题
 * @param {boolean} options.html 是否以v-html插入message
 * @param {string} options.customClass 自定义类名
 * @param {string} options.iconClass icon类名
 * @param {string} options.position 位置(top-right|top-left|bottom-right|bottom-left)
 * @param {boolean} options.showClose 是否显示关闭按钮
 * @param {number} options.offset 多个notification之间的间隔
 * @returns {Promise} 关闭时触发成功回调，点击时触发失败回调
 */
export function warningNotify (message,duration = 100,options = {}) {
  const { title,html,customClass,iconClass,position,showClose,offset } = options;
  return new Promise(function (resolve,reject) {
    Notification({
      type: 'warning',
      title,
      message,
      duration,
      dangerouslyUseHTMLString: html,
      customClass,
      iconClass,
      position,
      showClose,
      onClose: resolve,
      onClick: reject,
      offset,
    });
  });
}
