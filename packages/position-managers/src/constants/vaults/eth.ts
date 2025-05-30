import { ethereumTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { Strategy, VaultConfig } from '../../types'
import { MANAGER } from '../managers'

export const vaults: VaultConfig[] = [
  {
    id: 9,
    idByManager: 4,
    name: 'BRIL',
    bCakeWrapperAddress: '0xEE27e4ba40794e03e9aD6A12e0CC5AC0E0Fc2182',
    address: '0xEE27e4ba40794e03e9aD6A12e0CC5AC0E0Fc2182',
    adapterAddress: '0x694f7e6e8B323dc5E2A6Ea6f5985D47DB381E5e9',
    vaultAddress: '0x0414055f84Cb5510C3ADaff7a9f98E401159E0Ab',
    currencyA: ethereumTokens.blb,
    currencyB: ethereumTokens.weth,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.HIGH,
    strategy: Strategy.YIELD_IQ,
    manager: MANAGER.BRIL,
    isSingleDepositToken: true,
    allowDepositToken0: false,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.bril.finance/',
    strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
    learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  },
  {
    id: 8,
    idByManager: 3,
    name: 'BRIL',
    bCakeWrapperAddress: '0x6a38e12CcDe7e35E818b341964fB8AA3BDBb80eE',
    address: '0x6a38e12CcDe7e35E818b341964fB8AA3BDBb80eE',
    adapterAddress: '0x726663a646132EC0492D8A22619ECDdCcFc7D72C',
    vaultAddress: '0x2689eF3EC44f417d22c862F16F3D5e71E6287086',
    currencyA: ethereumTokens.weth,
    currencyB: ethereumTokens.rswETH,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.YIELD_IQ,
    manager: MANAGER.BRIL,
    isSingleDepositToken: true,
    allowDepositToken0: true,
    allowDepositToken1: false,
    managerInfoUrl: 'https://www.bril.finance/',
    strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
    learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  },
  {
    id: 6,
    idByManager: 5,
    name: 'RANGE',
    bCakeWrapperAddress: '0x503f71aBB336fa704ee5C8b0d0051Dd9DB5faE38',
    address: '0xF2D06DDE880fD506c1b153a3583c9162Dcac0148',
    adapterAddress: '0xED1977E9AA776c4A0E1de94b696477F843F93384',
    vaultAddress: '0x97e4763B55D06230f7FAE335805edf53fC2E3275',
    currencyA: ethereumTokens.wstETH,
    currencyB: ethereumTokens.ethx,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOWEST,
    strategy: Strategy.PEGGED,
    manager: MANAGER.RANGE,
    isSingleDepositToken: false,
    allowDepositToken0: true,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.rangeprotocol.com/',
    strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
    learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  },
  {
    id: 7,
    idByManager: 4,
    name: 'RANGE',
    address: '0x74C84169CB82Ac8c0259B79fD8cdb62D2850958a',
    adapterAddress: '0x6Ede0c7BA067AbeFC02283910753b19D8958D9DA',
    vaultAddress: '0x1b6cEecc5FC0B26E9b85695F649c3A45c18dd46c',
    currencyA: ethereumTokens.usdc,
    currencyB: ethereumTokens.ethx,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.PASSIVE,
    manager: MANAGER.RANGE,
    isSingleDepositToken: false,
    allowDepositToken0: true,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.rangeprotocol.com/',
    strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
    learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  },
  {
    id: 4,
    idByManager: 1,
    name: 'BRIL',
    address: '0x6F8D43f50c20cf01dFa3DaE0577447933fc5D7c5',
    adapterAddress: '0x260911533F8c42DCaAea4cAE62234284CdDbFa64',
    vaultAddress: '0x352984DBF1EF87C0840bD48043021fFeC2fcAcED',
    currencyA: ethereumTokens.weth,
    currencyB: ethereumTokens.usdt,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.YIELD_IQ,
    manager: MANAGER.BRIL,
    isSingleDepositToken: true,
    allowDepositToken0: true,
    allowDepositToken1: false,
    managerInfoUrl: 'https://www.bril.finance/',
    strategyInfoUrl: 'https://docs.bril.finance/yield-iq/overview',
    learnMoreAboutUrl: 'https://docs.bril.finance/bril-finance/introduction',
  },
  {
    id: 5,
    idByManager: 2,
    name: 'BRIL',
    address: '0x52DC65E8ae224A35c341E34EB22fC2A13c1994Da',
    adapterAddress: '0xE98e37Aa18509018B5f0C3c53354445e05b6b4A1',
    vaultAddress: '0xD0dCEf57Dd0F196dD549a3C56332166C2f2ded4b',
    currencyA: ethereumTokens.weth,
    currencyB: ethereumTokens.swETH,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.ASCEND,
    manager: MANAGER.BRIL,
    isSingleDepositToken: true,
    allowDepositToken0: true,
    allowDepositToken1: false,
    managerInfoUrl: 'https://www.bril.finance/',
    strategyInfoUrl: 'https://docs.bril.finance/ascend/overview',
    learnMoreAboutUrl: 'https://docs.bril.finance/yield-iq/faqs',
    priceFromV3FarmPid: 52,
  },
  {
    id: 1,
    idByManager: 1,
    name: 'RANGE',
    address: '0x589e8bC919fF18fbF62c7C3d8E3fD86ecD7549C3',
    adapterAddress: '0x9645044C305998203cba31FB99f38e95c3daBD22',
    vaultAddress: '0x581046c928cd7e892654A606Ce66F98b026DC793',
    currencyA: ethereumTokens.rETH,
    currencyB: ethereumTokens.weth,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.PEGGED,
    manager: MANAGER.RANGE,
    isSingleDepositToken: false,
    allowDepositToken0: true,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.rangeprotocol.com/',
    strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
    learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  },
  {
    id: 2,
    idByManager: 2,
    name: 'RANGE',
    address: '0xBfaa05CA3078912344491926Ff81F6a75AEFea8b',
    adapterAddress: '0xe6EAb25C3Fd8183f4EdF07e94dAB92d6B3368F4a',
    vaultAddress: '0x52086FE16AC8D95537d8a1a00d57eBFBA7f92289',
    currencyA: ethereumTokens.usdc,
    currencyB: ethereumTokens.usdt,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOWEST,
    strategy: Strategy.PEGGED,
    manager: MANAGER.RANGE,
    isSingleDepositToken: false,
    allowDepositToken0: true,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.rangeprotocol.com/',
    strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
    learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  },
  {
    id: 3,
    idByManager: 3,
    name: 'RANGE',
    address: '0xBcbb1928a72423505f5B479CEd487DA048911669',
    adapterAddress: '0x6fb946B55C50E6Dc64c59D3F3e6c7C64580d6B82',
    vaultAddress: '0xFf9488D98d03Eaffe4B56B462c037769101b1b9c',
    currencyA: ethereumTokens.weth,
    currencyB: ethereumTokens.usdt,
    earningToken: ethereumTokens.cake,
    feeTier: FeeAmount.LOW,
    strategy: Strategy.PASSIVE,
    manager: MANAGER.RANGE,
    isSingleDepositToken: false,
    allowDepositToken0: true,
    allowDepositToken1: true,
    managerInfoUrl: 'https://www.rangeprotocol.com/',
    strategyInfoUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
    learnMoreAboutUrl: 'https://range-protocol.gitbook.io/range-protocol/amm-vaults/strategy-details',
  },
]
