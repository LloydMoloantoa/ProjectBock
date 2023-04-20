/* //npm install --save crypto-js
//const { Blockchain } = require('./main');
//node main.js
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenisisBlock()];
    }

    createGenisisBlock() {
        return new Block(0, "01/01/2023", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }       
        }

        return true;
    }
}

module.exports.Blockchain = Blockchain; */
 
//import Block from "./Block";
//import Blockchain from "./Blockchain";

const { Blockchain } = require('./Blockchain');
const { Block } = require('./Blockchain');

let lloydCoin = new Blockchain();
lloydCoin.addBlock(new Block(1, "10/07/2017", { amount: 4 }));
lloydCoin.addBlock(new Block(2, "12/07/2017", { amount: 10 }));

//console.log('is blockchain valid? ' + lloydCoin.isChainValid());

//lloydCoin.chain[1].data = {amount: 56};
//lloydCoin.chain[1].hash = lloydCoin.chain[1].calculateHash();

//console.log('is blockchain valid? ' + lloydCoin.isChainValid());

const block = JSON.stringify(lloydCoin, null, 4);

//console.log(chain);

for (const block of data.chain) {
    // Extract index and data values
    const index = block.index;
    const data = block.data;

    // Print the extracted values
    console.log(`Index: ${index}, Data: ${JSON.stringify(data)}`);
}