/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/15-medium-last/README.zh-CN.md
 * 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。
 */

type arr5 = ['a', 'b', 'c'];
type arr4 = [3, 2, 1];
//  type Last<T extends any[]> = [never,...T][T['length']]
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
type tail1 = Last<arr5>; // expected to be 'c'
type tail2 = Last<arr4>; // expected to be 1

type T1 = { name: string };
type T2 = { age: number };

type K2<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;

interface Props {
  a: (x: T1) => void;
  b: (x: T2) => void;
}

type k3 = K2<Props>;
