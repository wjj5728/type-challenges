/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md
 */

type Concat<T extends Array<number>, U extends Array<number>> = [...T, ...U];
type Result = Concat<[1], [2]>; // expected to be [1, 2]
