export const parallel = async (threads: Promise<any>[]): Promise<any[]> => {
  return await Promise.all(threads);
};
/**
 * Wait
 * @param waitSeconds 秒
 */
export const wait = (waitSeconds: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, waitSeconds * 1000);
  });
};
