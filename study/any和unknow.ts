const a: any = '111';
a.hello();
class test1 {
  hello() {}
}
const b: unknown = '222';
if (b instanceof Object && b.hasOwnProperty('hello')) {
  b.hello();
}

function padLeft(padding: number | string, input: string): string {
  // throw new Error("Not implemented yet!");
  return typeof padding == 'number' && new Array(padding + 1).join(' ') + input;
}

interface Test {
  a: number;
}
interface Test {
  b: string;
}
const dddd: Test = {
  a: 1,
  b: '2',
};

type aaaa = keyof any; /* string | number | symbol */
type TTT = {};

type cccc = keyof TTT;
