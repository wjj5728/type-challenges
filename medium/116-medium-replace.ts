/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/116-medium-replace/README.md
 */
type Replace<T, K extends string, R extends string> =
  T extends `${infer A}${K}${infer B}` ? `${A}${R}${B}` : never;
type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'
