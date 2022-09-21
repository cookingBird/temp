import nprogress from 'nprogress';
// NProgress 配置
nprogress.configure({
  setting: {
    showSpinner: false,
  },
});
export default class NProgressPlugin {
  constructor(router) {
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
