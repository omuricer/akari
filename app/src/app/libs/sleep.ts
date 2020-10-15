const Sleep = {
  wait: (msec: number) => {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, msec);
    });
  },
  waitRipple: () => {
    const waitMSec = 150;
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, waitMSec);
    });
  },
};
export default Sleep;
