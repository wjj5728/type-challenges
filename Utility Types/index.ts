type Partial1<T> = {
  [P in keyof T]+?: T[P];
};

type Required1<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
};

type Pick1<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record1<K extends keyof any, T> = {
  [P in K]: T;
};

type Exclude1<T, U> = T extends U ? never : T;

type Extract1<T, U> = T extends U ? T : never;

type Omit1<T, K extends keyof any> = Pick<T, Exclude1<keyof T, K>>;

type NonNullable1<T> = T extends null | undefined ? never : T;
