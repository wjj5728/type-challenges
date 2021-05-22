/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md
 */

type If<B, T, U> = B extends Boolean ? (B extends true ? T : U) : never;

type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'
