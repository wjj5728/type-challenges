/**1
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/2-medium-return-type/README.zh-CN.md
 */

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
type MyReturnType<T> = T extends (v: any) => infer A ? A : never;
type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"

type test2 = typeof fn;
