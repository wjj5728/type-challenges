/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/16-medium-pop/README.md
 */

type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type Pop<T extends any[]> = T extends [..._: infer D, C: infer C]
  ? [...D]
  : never;
type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]

/* Extra: Similarly, can you implement Shift, Push and Unshift as well? */

type Shift<T extends any[]> = T extends [_: infer _, ...C: infer C] ? _ : never;
type re3 = Shift<arr1>; // expected to be ['a', 'b', 'c']
type re4 = Shift<arr2>; // expected to be [3, 2]

type Push<T extends any[], K> = [...T, K];
type re5 = Push<arr1, 'e'>; // expected to be ['a', 'b', 'c']
type re6 = Push<arr2, 0>; // expected to be [3, 2]

type Unshift<T extends any[]> = T extends [...K: infer K, E: infer E]
  ? E
  : never;
type re7 = Unshift<arr1>; // expected to be ['a', 'b', 'c']
type re8 = Unshift<arr2>; // expected to be [3, 2]
