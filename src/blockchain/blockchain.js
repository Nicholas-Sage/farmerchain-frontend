class Block {

constructor(index,timestamp,data,previousHash = ""){

this.index = index
this.timestamp = timestamp
this.data = data
this.previousHash = previousHash
this.hash = this.calculateHash()

}

calculateHash(){

return btoa(
this.index +
this.previousHash +
this.timestamp +
JSON.stringify(this.data)
)

}

}

class Blockchain{

constructor(){

this.chain = [this.createGenesisBlock()]

}

createGenesisBlock(){

return new Block(0,Date.now(),"Genesis Block","0")

}

getLatestBlock(){

return this.chain[this.chain.length - 1]

}

addBlock(data){

const newBlock = new Block(

this.chain.length,
Date.now(),
data,
this.getLatestBlock().hash

)

this.chain.push(newBlock)

}

}

const FarmerChain = new Blockchain()

export default FarmerChain