/**1
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/8-medium-readonly-2/README.md
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyReadonly2<T, keys extends keyof T> = Omit<T, keys> &
  {
    readonly [key in Extract<keyof T, keys>]: T[key];
  };
const todo1: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo1.title = 'Hello'; // Error: cannot reassign a readonly property
todo1.description = 'barFoo'; // Error: cannot reassign a readonly property
todo1.completed = true; // OK
