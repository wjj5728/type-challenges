/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.md
 */

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type LookUp<T, key> = T extends { type: key } ? T : never;

type MyDog = LookUp<Cat | Dog, 'dog'>; // expected to be `Dog`
