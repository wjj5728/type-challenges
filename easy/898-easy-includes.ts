/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.md
 */

// type Includes<T, key> = key extends keyof T ? true : false; /* wrong */
type Includes<T extends any[], key> = key extends T[number]
  ? true
  : false; /* T[number] */
type isPillarMen = Includes<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
  'DiEsidisio'
>; // expected to be `false`
