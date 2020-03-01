const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('private key:', privateKey);

console.log();
console.log('public key:', publicKey);

// private key: f291d68537632c00d5ca625c1cf4500ddc0cf57f6b27ded8b086ace7c8901664
// public key: 047b961b67f14dc4203c0ac2c6f5b44a4dcb2d1d314037a24dfbba50f33570989bd190e827e9423d130f3736b794f924f754e629db2f76c3219a5d7109b36773ab