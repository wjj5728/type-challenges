/** https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.zh-CN.md */
/**1
 * 给定数组，转换为对象类型，键/值必须在给定数组中。

例如
 */
/* 关于 元组类型的解析  (typeof tuple)[number] */
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

const tuple = ['tesla', 'model 3', 'model X', 1] as const;

const result: TupleToObject<typeof tuple> = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  '1': 1,
}; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type test = typeof tuple;

const ButtonTypes = <const>['tesla', 'model 3', 'model X', 'model Y'];
type button = typeof ButtonTypes;
type a = button[number][];
const c: a = ['model 3', 'model X'];

const a = {
  c: '1',
  d: '2',
};
type test2 = keyof typeof a;
const d: test2[number] = '';
