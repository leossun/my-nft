const ethers = require('ethers');

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/your-api-key");

// Get block by number
async function getBlock() {
    const blockNumber = "latest";
    const block = await provider.getBlock(blockNumber);
    return block;
}

// 调用 getBlock 函数并处理结果
getBlock().then(block => console.log(block)).catch(err => console.error(err));


// // Connect to the Ethereum network
// const provider = new JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/your-api-key");

// // Get block by number
// const blockNumber = "latest";
// const block = await provider.getBlock(blockNumber);