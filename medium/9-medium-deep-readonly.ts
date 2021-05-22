/**1
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/9-medium-deep-readonly/README.md
 */

type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P];
};
const todo11: DeepReadonly<X> = {
  x: {
    a: 1,
    b: 'hi',
  },
  y: 'hey',
};

/* const 和 设置readonly的 差别 */
const a = {
  b: 2,
};
a.b = 3;
