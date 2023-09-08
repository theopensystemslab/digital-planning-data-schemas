import {Flags} from "../enums/Flags";

/**
 * @id #Result
 * @description The result of this application. Results are determined by flags corresponding to responses; each application can have up to one result per flagset
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
 * @description An individual result of this application
 */
export type ResultFlag = FlagMap[keyof FlagMap];
