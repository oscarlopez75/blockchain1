var block = require('./block');
const calHash = require('./calHash');


class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    return new block.Block(0, 123456789, 'Genesis Block', '0')
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = calHash.mineBlock(newBlock.index, newBlock.previousHash, newBlock.timestamp, JSON.stringify(newBlock.data).toString());
    this.chain.push(newBlock);
  }

  isChainValid(){
    for(let i = 0; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];


      if(currentBlock.hash != calHash.mineBlock(currentBlock.index, currentBlock.previousHash, currentBlock.timestamp, JSON.stringify(currentBlock.data).toString())){
          return ('Some one fucked with block ' + i);
      }
    }

    return "All good, blockchain unchanged";
  }


}

module.exports.BlockChain = BlockChain;
