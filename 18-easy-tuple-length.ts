/**1
 * https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.zh-CN.md
 * 对于给定的元组，您需要创建一个通用的Length，选择元组的长度
 */

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
];
type Length<T extends any[]> = T['length'];
type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
