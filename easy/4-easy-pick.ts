/* https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.zh-CN.md */
/** 
 * 无需使用内置的Pick<T, K>泛型即可。

    通过从K中选择属性T来构造类型

    例如
 * 
 * 
 */
type MyPick<T, key extends keyof T> = {
  [prop in key]: T[prop];
};
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
