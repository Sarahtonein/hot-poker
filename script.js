const Web3 = require('web3');

// Replace 'YOUR_CONTRACT_ADDRESS' with the actual contract address
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Replace with your contract ABI
const contractABI = [
  // Your contract ABI here
];

// Create a web3 instance using the user's provider
async function initWeb3() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request access to the user's MetaMask accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return new Web3(window.ethereum);
    } catch (error) {
      throw new Error('User denied account access');
    }
  } else if (typeof window.web3 !== 'undefined') {
    // Legacy dapp browsers
    return new Web3(window.web3.currentProvider);
  } else {
    throw new Error('Please install MetaMask to use this dApp.');
  }
}

// Function to get the user's address
async function getUserAddress(web3) {
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

// Function to deposit funds to the smart contract
async function depositFunds(web3, userAddress, value) {
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  try {
    await contractInstance.methods.depositFunds().send({ from: userAddress, value: web3.utils.toWei(value.toString(), 'ether') });
    console.log('Deposit successful');
  } catch (error) {
    console.error('Error depositing funds:', error);
  }
}

// Function to withdraw funds from the smart contract
async function withdrawFunds(web3, userAddress, withdrawalAmount) {
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  try {
    await contractInstance.methods.withdrawDeposit(withdrawalAmount).send({ from: userAddress });
    console.log('Withdrawal successful');
  } catch (error) {
    console.error('Error withdrawing funds:', error);
  }
}

// Function to check the user's balance in the smart contract
async function checkBalance(web3, userAddress) {
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const balance = await contractInstance.methods.checkBalance().call({ from: userAddress });
    console.log('User balance:', balance);
  } catch (error) {
    console.error('Error checking balance:', error);
  }
}

// Function to play a game in the smart contract
async function playGame(web3, userAddress) {
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const result = await contractInstance.methods.playAGame().call({ from: userAddress });
    console.log('Game result:', result);
  } catch (error) {
    console.error('Error playing the game:', error);
  }
}

// Main function to interact with the smart contract
async function main() {
  const web3 = await initWeb3();
  const userAddress = await getUserAddress(web3);

  // Get the button elements
  const depositButton = document.getElementById('deposit');
  const withdrawButton = document.getElementById('withdraw');
  const playAGameButton = document.getElementById('playAGame');
  const checkBalanceButton = document.getElementById('checkBalance');

  // Add event listeners to the buttons
  depositButton.addEventListener('click', async () => {
    await handleDepositButtonClick(web3, userAddress, 0.1); // Example: Deposit 0.1 Ether
  });

  withdrawButton.addEventListener('click', async () => {
    await handleWithdrawButtonClick(web3, userAddress, 0.05); // Example: Withdraw 0.05 Ether
  });

  playAGameButton.addEventListener('click', async () => {
    await handlePlayAGameButtonClick(web3, userAddress);
  });

  checkBalanceButton.addEventListener('click', async () => {
    await handleCheckBalanceButtonClick(web3, userAddress);
  });
}

main();
