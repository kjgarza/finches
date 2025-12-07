/**
 * Shared type definitions
 */

export type PropsWithClassName<P = unknown> = P & {
  className?: string;
};

export type ValueOf<T> = T[keyof T];

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
