// SPDX-License-Identifier: MIT

//mint the planted flowers 
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Game is VRFConsumerBase {
    uint256 constant public NUM_FLOWERS = 11;
    bytes32 constant private KEY_HASH = bytes32("YOUR_KEY_HASH"); // Replace with the actual key hash provided by Chainlink
    uint256 constant private RANDOMNESS_FEE = 1 * 10**18; // 1 LINK (adjust the fee according to your requirements)

    enum FlowerType {Red, Blue, Yellow, Purple, Orange, Mixed, Assorted, Black, White, None}

    mapping(address => uint256) private balances;
    mapping(bytes32 => address) private requestIdToSender;
    mapping(bytes32 => FlowerType) private requestIdToFlower;

    event SeedPlanted(address indexed player, uint256 seed);
    event FlowerGrown(address indexed player, FlowerType flower);
    event Deposit(address indexed player, uint256 amount);
    event Withdraw(address indexed player, uint256 amount);

    constructor(address vrfCoordinator, address linkToken) VRFConsumerBase(vrfCoordinator, linkToken) {}

    function plantSeed(uint256 seed) external {
        require(seed > 0, "Seed value must be greater than zero");
        require(LINK.balanceOf(address(this)) >= RANDOMNESS_FEE, "Not enough LINK to pay for randomness");

        bytes32 requestId = requestRandomness(KEY_HASH, RANDOMNESS_FEE, seed);
        requestIdToSender[requestId] = msg.sender;

        emit SeedPlanted(msg.sender, seed);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        address player = requestIdToSender[requestId];
        FlowerType flower = getRandomFlower(randomness);
        requestIdToFlower[requestId] = flower;

        emit FlowerGrown(player, flower);

        // Calculate the player's winnings (if any) and update the balance accordingly
        uint256 wager = balances[player];
        uint256 payout = calculatePayout(flower, wager);
        balances[player] += payout;
    }

    function calculatePayout(FlowerType flower, uint256 wager) internal pure returns (uint256) {
        if (flower == FlowerType.red || FlowerType.Blue || FlowerType.Orange || FlowerType.Purple || FlowerType.Yellow || FlowerType.Assorted){
            return wager * 2;
        } else if (flower == FlowerType.white || FlowerType.Black) {
            return wager * 100;
        } else {
            // Player loses
            return 0;
        }
    }

    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");

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


    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    // ... (other functions and logic)
}
