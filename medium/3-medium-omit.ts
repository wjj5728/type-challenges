/**1
 *
 * https://github.com/type-challenges/type-challenges/blob/master/questions/3-medium-omit/README.md
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, keys> = {
  [P in Exclude<keyof T, keys>]: T[P];
};

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
