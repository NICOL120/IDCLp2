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
 * This structure holds the parameters for reward info query response
 */
export interface RewardInfoResponse {
  /**
   * The detail on reward info
   */
  reward_info: RewardInfoResponseItem;
  /**
   * The staker address
   */
  staker_addr: string;
  [k: string]: unknown;
}
/**
 * This structure holds the detail for reward info
 */
export interface RewardInfoResponseItem {
  /**
   * The LP token amount bonded
   */
  bond_amount: Uint128;
  /**
   * The share of total LP token bonded
   */
  bond_share: Uint128;
  /**
   * The deposit amount
   */
  deposit_amount: Uint128;
  /**
   * The deposit cost
   */
  deposit_costs: Uint128[];
  /**
   * The weighted average deposit time
   */
  deposit_time: number;
  /**
   * The LP token contract address
   */
  staking_token: string;
  [k: string]: unknown;
}