const contractAddress = '0xC01BE1207B2477064F3d4BF2dDaed0d687e7FD5f';
const contractABI = [
	{
		"inputs": [],
		"name": "depositFunds",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_betAmount",
				"type": "uint256"
			}
		],
		"name": "playAGame",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
		"inputs": [],
		"name": "getRandomNumber",
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
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let web3;
let contractInstance;
// Function to connect to MetaMask
async function connectToMetaMask() {
    try {
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert('Connected to MetaMask!');
            
            // Initialize the contract instance here after connecting to MetaMask
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            contractInstance = contract;
        } else {
            alert('MetaMask not detected. Please install MetaMask extension.');
        }
    } catch (error) {
        alert('Failed to connect to MetaMask. Please try again.');
    }
}
// Function to disconnect from MetaMask
async function disconnectFromMetaMask() {
    try {
        if (web3 && web3.currentProvider && web3.currentProvider.disconnect) {
            await web3.currentProvider.disconnect();
            web3 = undefined; // Clear the web3 instance
            contractInstance = undefined; // Clear the contract instance
            alert('Disconnected from MetaMask!');
        } else {
            alert('MetaMask not detected or not connected.');
        }
    } catch (error) {
        alert('Failed to disconnect from MetaMask. Please try again.');
    }
}
async function withdrawDeposit() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const withdrawalInput = document.getElementById('withdrawAmount');
        const withdrawalValue = withdrawalInput.value;

        // Validate the withdrawal value
        if (isNaN(withdrawalValue) || withdrawalValue <= 0) {
            alert('Invalid withdrawal amount. Please enter a positive number.');
            return;
        }

        // Convert withdrawal amount to wei
        const amountToWithdraw = web3.utils.toWei(withdrawalValue.toString(), 'ether');

        // Call the withdrawal function on the contract
        const accounts = await web3.eth.getAccounts();
        const transaction = await contractInstance.methods.withdrawFunds(amountToWithdraw).send({
            from: accounts[0],
            gas: 200000 // Adjust the gas limit as needed
        });

        console.log('Transaction hash:', transaction.transactionHash);
    } catch (error) {
        console.error('Error while withdrawing funds:', error);
        alert('Error while withdrawing funds: ' + error.message); // Provide specific error message
    }
}
async function playAGame() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const betAmountInput = document.getElementById('gambleAmount');
        const betAmountValue = betAmountInput.value;

        // Validate the bet amount
        if (isNaN(betAmountValue) || betAmountValue <= 0) {
            alert('Invalid bet amount. Please enter a positive number.');
            return;
        } else {
			if(betAmountValue > 0.025) {
				alert('Invalid bet amount, max is 0.025');
				return;
			}
		}

        // Convert bet amount to wei
        const betAmount = web3.utils.toWei(betAmountValue.toString(), 'ether');

        // Call the playAGame function on the contract with the user input
        const accounts = await web3.eth.getAccounts();
		const transaction = await contractInstance.methods.playAGame(betAmount).send({
			from: accounts[0],
			gas: 200000 // Adjust the gas limit as needed
		});
		
        console.log('Transaction hash:', transaction.transactionHash);
    } catch (error) {
        console.error('Error while playing the game:', error);
        alert('Error while playing the game: ' + error.message); // Provide specific error message
    }
}
async function depositFunds() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const depositInput = document.getElementById('depositAmount');
        const depositValue = depositInput.value;

        // Validate the deposit value
        if (isNaN(depositValue) || depositValue <= 0) {
            alert('Invalid deposit amount. Please enter a valid positive number.');
            return;
        }

        // Convert the deposit amount to wei
        const amountToDeposit = web3.utils.toWei(depositValue, 'ether');

        // Call the deposit function on the contract
        const accounts = await web3.eth.getAccounts();
        const transaction = await contractInstance.methods.depositFunds().send({
            from: accounts[0],
            value: amountToDeposit,
            gas: 200000 // Adjust the gas limit as needed
        });

        console.log('Transaction hash:', transaction.transactionHash);
    } catch (error) {
        console.error('Error while depositing funds:', error);
    }
}
// The checkBalance function modified to display the result in the HTML div
async function checkBalance() {
    try {
        if (!web3 || !contractInstance) {
            alert('Please connect to MetaMask first.');
            return;
        }

        const userAddress = await getCurrentUserAddress();
        const balance = await contractInstance.methods.checkBalance().call({ from: userAddress });
		const balanceInEther = web3.utils.fromWei(balance, 'ether')
        console.log('User contract balance:', balanceInEther);

        // Display the balance in the HTML div
        const balanceContainer = document.getElementById('balanceContainer');
        balanceContainer.textContent = `Your contract balance: ${balanceInEther} ETH`;
		balanceContainer.style.color = "green";
    } catch (error) {
        console.error('Error while retrieving balance:', error);
    }
}
// Helper function to get the current user's address from MetaMask
async function getCurrentUserAddress() {
    try {
        // Get the selected account address
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    } catch (error) {
        console.error('Error while getting user address:', error);
    }
}
// Adding event listeners to the buttons
document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connect');
    const disconnectButton = document.getElementById('disconnect');
    const depositButton = document.getElementById('deposit');
	const withdrawButton = document.getElementById('withdraw');
	const displayBalanceButton = document.getElementById('checkBalance');
	const playGameButton = document.getElementById('playAGame');
    
	if (playGameButton) {
        playGameButton.addEventListener('click', playAGame);
    }
    if (connectButton) {
        connectButton.addEventListener('click', connectToMetaMask);
    }

    if (disconnectButton) {
        disconnectButton.addEventListener('click', disconnectFromMetaMask);
    }

    if (depositButton) {
        depositButton.addEventListener('click', depositFunds);
    }

	if (withdrawButton) {
		withdrawButton.addEventListener('click', withdrawDeposit);
	}

	if (displayBalanceButton) {
		displayBalanceButton.addEventListener('click', checkBalance);
	}
});
