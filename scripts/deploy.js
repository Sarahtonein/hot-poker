const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const hotPokerContract = await ethers.getContractFactory("hotPoker");
  const linkTokenAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
  const vrfWrapperAddress = "0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693";
  const provider = ethers.provider;
  const private_key = process.env.PRIVATE_KEY;
  console.log("Private Key:", private_key);
  const wallet = new ethers.Wallet(private_key, provider);
  const [deployer] = await ethers.getSigners();
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
  
  const contractAddressABI = 
    [
      {
        inputs: [ [Object], [Object] ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [ [Object], [Object] ],
        name: 'OwnershipTransferred',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [ [Object] ],
        name: 'debugEvent',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [ [Object] ],
        name: 'flowerResult',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [ [Object] ],
        name: 'flowerTypeEvent',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [ [Object] ],
        name: 'randomEvent',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [ [Object] ],
        name: 'requestIdEvent',
        type: 'event'
      },
      {
        inputs: [ [Object] ],
        name: 'addressToBalance',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        "inputs": [],
        "name": "checkBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        inputs: [ [Object] ],
        name: 'currentGuess',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'depositFunds',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
      },
      {
        inputs: [ [Object] ],
        name: 'gambleAmount',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ type: 'uint256' }, { type: 'string' }],
        name: 'playAGame',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_requestId",
            "type": "uint256"
          },
          {
            "internalType": "uint256[]",
            "name": "_randomWords",
            "type": "uint256[]"
          }
        ],
        "name": "fulfillRandomWords",
        "outputs": [],
        "stateMutability": "internal",
        "type": "function"
      },
      {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [ [Object] ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [ [Object] ],
        name: 'winOrLose',
        outputs: [ [Object] ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_withdrawalAmount",
            "type": "uint256"
          }
        ],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
  ];

  const tokenContract = new ethers.Contract(linkTokenAddress, linkAbi, wallet);
  const GameAddress = new ethers.Contract(contractAddress, contractAddressABI, deployer);
  // Send token
  console.log(`We're sending tokens to ${contractAddress}`);
  const amountToSend = '100000000000000000';
  //const transferAmount = 1;
  //const tokenAmount = ethers.utils.parseUnits(transferAmount.toString(), DECIMALS);
  //Problems with parseunits, lets just input what we want 100000000000000000 == 0.1 link
  await tokenContract.transfer(contractAddress, amountToSend)
    .then(function(tx) {
     // console.log(tx);
      console.log(`transferred ${amountToSend} Link tokens`);
    });
  //const tokenAmount = ethers.utils.parseUnits(transferAmount.toString(), DECIMALS);

  //Now, lets send some gas to the contract
  console.log('Attempting to send gas to the contract');
  const depositTx = await GameAddress.depositFunds({ value: '10000000000000000' });
  await depositTx.wait();
  console.log("Funds deposited");

  //lets play a game
  console.log('Attempting to play a game');
  const playAGameTx = await GameAddress.playAGame('10000000000000000', 'Hot');
  await playAGameTx.wait();
  console.log('tx has', playAGameTx.hash);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
