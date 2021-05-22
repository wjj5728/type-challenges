/** https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.zh-CN.md */
/*** 
 * 无需使用内置的Readonly<T>泛型即可。

构造一个类型，并将T的所有属性设置为只读，这意味着无法重新分配所构造类型的属性。
 */
/* == Readonly */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

/* ----- */
interface Todo7 {
  title: string;
  description: string;
}

const todo7: MyReadonly<Todo7> = {
  title: 'Hey',
  description: 'foobar',
};

todo7.title = 'Hello'; // Error: cannot reassign a readonly property
todo7.description = 'barFoo'; // Error: cannot reassign a readonly property
