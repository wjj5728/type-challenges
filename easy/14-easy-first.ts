/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.zh-CN.md
 *
 * 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
 */

type arr1 = ['a', 'b', 'c'];
type arr3 = [];
type arr2 = [3, 2, 1];
type arr4 = [];

// type First<T extends any[]> = T[number] extends never ? never : T[0];
// type First<T extends any[]> = T extends [] ? never : T[0];
type First<T extends any[]> = T extends [_: infer A, ...O: any[]] ? A : never;
type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // expected to be 3
type head4 = First<arr4>; // expected to be 3
