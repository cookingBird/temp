import nprogress from 'nprogress';
import exceptKeys from '@/utils/tools/exceptKeys';

export default class NProgressPlugin {
  /**
   * @param {object} options nprogress参数
   * @reference https://www.npmjs.com/package/nprogress
   */
  constructor(options = {}) {
    const { setting = {} } = options;
    // NProgress 配置
    nprogress.configure({
      setting: {
        showSpinner: false,
        ...setting,
      },
      ...exceptKeys(options, 'setting'),
    });
  }
  install(router) {
    router.beforeEach((to, from, next) => {
      nprogress.start();
      setTimeout(next, 700);
    });
    router.afterEach((to, from) => {
      // to and from are both route objects.
      nprogress.done(true);
    });
  }
}
