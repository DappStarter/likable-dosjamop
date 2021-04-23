require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note museum unveil heavy arena forward throw'; 
let testAccounts = [
"0xe14a6f033cb522813154a12f9d957b4a476750a62c936c56df1a7b11f838fcb6",
"0x76f2e751bdc2932b52df6032bc0082990ceaa0889fa2014028515fc7d629848c",
"0xe5c17ceb45caec2cbdc287881ef64d2bf243e845e2e5c41b05bec582344d77f1",
"0xfe049f520d4ed56f0a25d9965e60a740029bf9f7bcae4b0e6bfc90c60729e5b2",
"0xcec3eb6f5340c248c2ecabbc08913293778b24392ee9f04a0ee25890530bb9c3",
"0xd102ed3b56bbb77cedf70e5521e300e69a780f93a38cbe488737cd80b79377ab",
"0x76ff3f99a3aa5216af966c73db02c7394aed683299da603648de429cdee6859f",
"0x587ba1c21a23a50051aaa498c7d8a697a848a833f68f5a21d733f6433be7ec5a",
"0x91de1a54ddbf057672161d0c28c19351330d192088662a6f70894c5bd98f74d7",
"0x6938bd300f2be9b530b47a19b41df6c877c6d17ae522d003e8e53402c5bec9b1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
