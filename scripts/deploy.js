const { ethers } = require("hardhat");
require("dotenv").config();

const DECIMALS = 18; // Set the correct number of decimal places for your token

async function main() {
  const hotPokerContract = await ethers.getContractFactory("hotPoker");
  const linkTokenAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
  const vrfWrapperAddress = "0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693";
  const provider = ethers.provider;
  const private_key = process.env.PRIVATE_KEY;
  console.log("Private Key:", private_key);
  const wallet = new ethers.Wallet(private_key, provider);

  const deploymentTransaction = await hotPokerContract.getDeployTransaction(linkTokenAddress, vrfWrapperAddress);

  // Send the deployment transaction
  const deploymentResponse = await wallet.sendTransaction(deploymentTransaction);

  // Wait for the deployment transaction to be mined
  const deploymentReceipt = await deploymentResponse.wait();

  // Get the deployed contract's address from the receipt
  const contractAddress = deploymentReceipt.contractAddress;
  console.log("hotPoker Contract deployed to:", contractAddress);
  //Load the LINK ERC20 token
  const linkAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [{"name": "", "type": "string"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
      "name": "approve",
      "outputs": [{"name": "", "type": "bool"}],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [{"name": "", "type": "uint256"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
      "name": "transferFrom",
      "outputs": [{"name": "", "type": "bool"}],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [{"name": "", "type": "uint8"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}, {"name": "_data", "type": "bytes"}],
      "name": "transferAndCall",
      "outputs": [{"name": "success", "type": "bool"}],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{"name": "_spender", "type": "address"}, {"name": "_subtractedValue", "type": "uint256"}],
      "name": "decreaseApproval",
      "outputs": [{"name": "success", "type": "bool"}],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{"name": "_owner", "type": "address"}],
      "name": "balanceOf",
      "outputs": [{"name": "balance", "type": "uint256"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [{"name": "", "type": "string"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
      "name": "transfer",
      "outputs": [{"name": "success", "type": "bool"}],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [{"name": "_spender", "type": "address"}, {"name": "_addedValue", "type": "uint256"}],
      "name": "increaseApproval",
      "outputs": [{"name": "success", "type": "bool"}],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
      "name": "allowance",
      "outputs": [{"name": "remaining", "type": "uint256"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [{"indexed": true, "name": "from", "type": "address"},
                 {"indexed": true, "name": "to", "type": "address"},
                 {"indexed": false, "name": "value", "type": "uint256"},
                 {"indexed": false, "name": "data", "type": "bytes"}],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [{"indexed": true, "name": "owner", "type": "address"},
                 {"indexed": true, "name": "spender", "type": "address"},
                 {"indexed": false, "name": "value", "type": "uint256"}],
      "name": "Approval",
      "type": "event"
    }
  ];
  

  const tokenContract = new ethers.Contract(linkTokenAddress, linkAbi, wallet);

  //send token
  const recipientAddress = contractAddress;
  console.log(`We're sending tokens to ${recipientAddress}`);


  // Amount of tokens to send
  const tokenAmount = ethers.utils.parseUnits("1", DECIMALS);
  console.log(tokenAmount);
  try {
    const tx = await tokenContract.transfer(recipientAddress, tokenAmount);
    await tx.wait();
    console.log('Tokens sent successfully:', tx.hash);
  } catch (error) {
    console.error('Error sending tokens:', error);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
