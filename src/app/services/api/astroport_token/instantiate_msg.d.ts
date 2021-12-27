/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;

/**
 * TokenContract InstantiateMsg
 */
export interface InstantiateMsg {
  decimals: number;
  initial_balances: Cw20Coin[];
  mint?: MinterResponse | null;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
  [k: string]: unknown;
}
export interface MinterResponse {
  /**
   * cap is a hard cap on total supply that can be achieved by minting. Note that this refers to total_supply. If None, there is unlimited cap.
   */
  cap?: Uint128 | null;
  minter: string;
  [k: string]: unknown;
}