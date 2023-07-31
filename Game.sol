// SPDX-License-Identifier: MIT

// Game of hot and cold; decentralized.
//4x hot/cold
//1x rainbow
// 1x black 1x white


// Who particiapted in the Sand Casino? Who fought and won epic battles, reaching untold riches...Just to lose it all again?
// Who planted the seeds that grew the flowers that rotate hands in the GE?
// To those who hosted, those who got roasted, those who just straight up suck; this nostalgia is for you.

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Game { 
    //* DEV TOPDO
      //Seperate contracts so that deposit / game are not the same?

    //Wager limit
    //$50 USD

    //Keep track of how much a user has wagered (gwei 
    //Keep track of how much a user has deposited
    constructor(address _ethAddress) {
        ETHADDRESS = _ethAddress;
    }
    uint256 private constant NUMBEROFFLOWERS = 11;
    uint256 private constant NUMBERLIMIT = 1000;
    uint256 private constant MINDEPOSIT = 50;
    uint256 private ETHADDRESS;

    mapping (uint => address) balances;

    function deposit() external payable {
        require (msg.value > minDeposit, "Must deposit some amount of ETH");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(amount > 0, "Withdrawal amount must be greater than zero");
        require(amount <= balances[msg.sender], "Insufficient balance");

        balances[msg.sender] -= amount;

        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Withdrawal failed");

        emit Withdraw(msg.sender, amount);
    }

    function plantASeed(uint256 _wagerAmount) external {

        //call generate Randomness function as part of thius.
        // if(generateRandomness();)
        //Do we want to return a value?
        //require that wager amount is <=$50 
        //perform a roll 
    }

    function generateRandomness() internal {

    }

    function calculateUsdVal(uint256 _amountReceived) internal view returns (uint256) {
        
    }

    function getValOfEth() external view returns (int) {
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

}

