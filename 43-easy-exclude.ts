/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.zh-CN.md
 * 实现内置的Exclude <T，U>
 */

type cc = {
  a: string;
  c: number;
};

type aa = {
  a: string;
  b: number;
};
type Exclude1<T, U> = T extends U ? never : T;
type dd = Exclude1<1 | 2, 1 | 3>;
