import {Flags} from '../enums/Flags';

/**
 * @id #Result
 * @description The result of the application. Results are determined by flags corresponding to responses; each application can have up to one result per flagset
 */
export type Result = ResultFlag[]; // @todo validate/restrict array to one result per flagset

type FlagKeys = keyof typeof Flags;

type GenericFlag<TKey extends FlagKeys> = {
  value: TKey;
  description: (typeof Flags)[TKey];
};

type FlagMap = {
  [K in FlagKeys]: GenericFlag<K>;
};

/**
 * @id #ResultFlag
 * @description The result of a single flagset
 */
export type ResultFlag = FlagMap[keyof FlagMap];
