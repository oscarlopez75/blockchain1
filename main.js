var block = require('./block');
var blogchain = require('./blockchain');
var addBlockChain = require('./addBlock');


let oscarCoin = new blogchain.BlockChain();
oscarCoin.addBlock(new block.Block(1, 987654321, {amount: 4}));
oscarCoin.addBlock(new block.Block(2, 543219876, {amount: 10}));
console.log(JSON.stringify(oscarCoin, null, 4));

//let oscarCoin2 = new addBlockChain.addBlockChain(oscarCoin);
//oscarCoin2.addNewBlock(111222333, {amount: 10});




/*****************************************************checks******************************************************************************/
console.log(oscarCoin.isChainValid());

//screwing one record
oscarCoin.chain[2].data = {amount: 1000};
console.log(oscarCoin.isChainValid());

//setting it back to what it was
oscarCoin.chain[2].data = {amount: 10};
console.log(oscarCoin.isChainValid());
/*****************************************************checks******************************************************************************/
