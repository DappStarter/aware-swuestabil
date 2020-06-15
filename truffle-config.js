require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski strong roof stereo purpose inner arch olympic super'; 
let testAccounts = [
"0xa41435422e1cfc09ca87e2def1b288730e9c1863d3818106ee545e9a458a3415",
"0xf73b2a5548a237eca89340638dea3803fbc96853e3035a1dc674243b0f3d14fd",
"0x8a866d719ff761e3913f34d7751942656f6aeb05f32b484d6765d9223b2baa6e",
"0xda85d66aaa01ac0c479fb7364477e2396a957a2e135038f9cc5302f4390cd2e8",
"0xbee34ed18a6d834609dc045fc0d548667143187223660f555a66cce13bf0f53e",
"0xc434d56a6de9f8472ef602cff9dae2104d1f14d8750ba8eeaf05bffeb8a4c67f",
"0x08ce58dec9be7abda1f2c0276103a41046426c820826726849a7b5279bf3832f",
"0xf2f16fe6e553a5ec65e8b8e013b1f716b1f2497b00305deda1b9bcbf8ec30d62",
"0x0697b68cbda1f326ee69107dd7531d24b741337e55ef9b046f93c2e65dbc81b2",
"0x86192b988c7689207cff65fb9cff6107828a6e33307ecc4df1c8c6877c7e8e57"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
