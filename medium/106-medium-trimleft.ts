/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.md
 *
 * \t 表示四个空格  \n 表示换行
 */

type space = ' ' | '\n';

type TrimLeft<T extends string> = T extends `${space}${infer U}`
  ? TrimLeft<U>
  : T;

type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
