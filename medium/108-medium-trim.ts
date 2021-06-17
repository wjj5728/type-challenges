/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/108-medium-trim/README.md
 */
type Space = ' ';
type Trim<T extends string> = T extends `${Space}${infer U}${Space}`
  ? Trim<U>
  : T;
type trime = Trim<'  Hello World  '>; // expected to be 'Hello World'
