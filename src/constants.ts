import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97
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

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
export const FACTORY_FARM = '0xEE638aa41e12b6C6df71F88410eB1dDD2Fb28973';
export const FACTORY_DONK = '0x04D6b20f805e2bd537DDe84482983AabF59536FF';
export const FACTORY_BABY = '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da';
export const FACTORY_APE = '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6';
export const FACTORY_GUITAR = '0x99672E305FD27121D0dB389745D3aA8E26D73818';
export const FACTORY_AUTOSHARK = '0xe759Dd4B9f99392Be64f1050a6A8018f73B53a13';
export const FACTORY_BISWAP = '0x858e3312ed3a876947ea49d572a7c42de08af7ee';
export const FACTORY_YUKLA = '0xB30333b3983EEBD968ADff63eAf6C39378f8F375';

export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'
export const FARM_CODE_HASH = '0x5efdbad5ed4aa46355ae749659666584cf3bf0f5ea5a7e32b05f2d35f074746f';
// export const CORGI_CODE_HASH = '0xefb668a13fe7a2809473f73bf1e4ea6907a6294e4401bf6246b8b4a4dddcc04e'
export const DONK_CODE_HASH = '0x459ecd9951ca9e8fb3c808861a5edccb1e68df35278b65d3b2db0b65d5ae472a';
export const BABY_CODE_HASH = '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5';
//export const INIT_CODE_HASH = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
export const APE_CODE_HASH = '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b'
export const GUITAR_CODE_HASH = '0xc6641d693fc283afc31060e4dc181daa7e43eb62024557f00e66f698fc7b692d'
export const AUTOSHARK_CODE_HASH = '0x024c8482358faf5eeea4ff7f0a18734bc482bf2e61ec04711fcee726756287ee'
export const BISWAP_CODE_HASH = '0xfea293c909d87cd4153593f077b76bb7e94340200f4ee84211ae8e4f9bd7ffdf'
export const YUKLA_CODE_HASH = '0xa423fc5821b04c41d402fe5ea2291791ed88ac231eb46437af2fc318ac7a3c38'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
