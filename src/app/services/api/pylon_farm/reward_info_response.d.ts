/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Uint128 = string;
export type HumanAddr = string;
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;

export interface RewardInfoResponse {
  reward_infos: RewardInfoResponseItem[];
  staker_addr: HumanAddr;
  [k: string]: unknown;
}
export interface RewardInfoResponseItem {
  accum_spec_share: Uint128;
  asset_token: HumanAddr;
  auto_bond_amount: Uint128;
  auto_bond_share: Uint128;
  auto_spec_share_index: Decimal;
  bond_amount: Uint128;
  farm_share: Uint128;
  farm_share_index: Decimal;
  locked_spec_reward: Uint128;
  locked_spec_share: Uint128;
  pending_farm_reward: Uint128;
  pending_spec_reward: Uint128;
  spec_share: Uint128;
  stake_bond_amount: Uint128;
  stake_bond_share: Uint128;
  stake_spec_share_index: Decimal;
  [k: string]: unknown;
}