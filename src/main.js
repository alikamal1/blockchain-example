const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('364fea1a6d2148f472fa3affa48f4d179fca996cfdf4c183b5621337268adac9');
const myWalletAddress = myKey.getPublic('hex');

let bitCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'public key of second address here', 10);
tx1.signTransaction(myKey);
bitCoin.addTransaction(tx1);

console.log('\nstarting the miner.');
bitCoin.minePendingTransactions(myWalletAddress);
console.log('\nbalannce of my wallet', bitCoin.getBalanceOfAddress(myWalletAddress));

console.log('is chain valid?', bitCoin.isChainValid());

bitCoin.chain[1].transactions[0].amount = 1;
console.log('is chain valid?', bitCoin.isChainValid());