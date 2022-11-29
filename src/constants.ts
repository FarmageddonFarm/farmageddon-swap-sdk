import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  BSCNET = 56,
  CICNET = 1353,
  TESTNET = 97 // BSC Testnet
}


export interface Dex {
  id: string
  name: string
  lpname: string
  router: Address
  factory: Address
  dexABI: any
  allowTrade: boolean
  factoryBase: Token
  codeHash: string
  numerator: string
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = '0xfD35F3f178353572E4357983AD2831fAcd652cC5'
// export const FACTORY_WENDEX = '0x51eD5a1f2EC7516dB92ff5Ae8d76ea4A2B87A6d1';
// export const FACTORY_FARMOLD = '0x012d8609CFd16c94998192F47b8934Db5Df0bE5A';

// export const INIT_CODE_HASH = '0xa1327405caec958d0e1dbb61bb9e676f2a8a32236a5665b05f4671794f4e5ee5'
// export const WENDEX_CODE_HASH = '0x8be01ec322734ce0aaa5f6343563c793ae68642bd007fe91739bfc4da476f73c';
// export const FARMOLD_CODE_HASH = '0x636281ef08bc264ece82ad8b0bc9325228d3cbac5b2f661138dd0f96771b6054';

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
// export const FEES_NUMERATOR = JSBI.BigInt(9985)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
