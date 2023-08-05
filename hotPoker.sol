// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/access/Ownable.sol";

contract hotPoker is Ownable {

    /*@DEV TODO
        Implement ChainLink VRF
        Events that log what happens within the game
    */

    mapping(address => uint) addressToBalance;

    function depositFunds() external payable {
        addressToBalance[msg.sender] += msg.value;
        //Fire event
    }

    function _random() internal view returns(uint256) {
        uint256 randomNumber = block.difficulty;
        return randomNumber;
    }

    function withdrawDeposit(uint _withdrawalAmount) external {
    // Check if the sender has a non-zero balance
        require(addressToBalance[msg.sender] >= _withdrawalAmount, "Insufficient balance");

    // Subtract the withdrawal amount from the sender's balance
        addressToBalance[msg.sender] -= _withdrawalAmount;

    // Transfer the ETH to the sender
        payable(msg.sender).transfer(_withdrawalAmount);

    // Fire event
}

    function checkBalance() external view returns (uint) {
        return addressToBalance[msg.sender];
    }

    function playAGame(uint256 _betAmount) external returns(bool){
        // Implement your logic here for the game
        require(addressToBalance[msg.sender] != 0, "Must deposit before playing");
        uint256 randomNumber = _random();
        bool trueorFalse; 
        if(randomNumber % 2 == 0) {
            trueorFalse = true;
            addressToBalance[msg.sender] += _betAmount * 2;
            return trueorFalse;
        } else {
            trueorFalse = false;
            addressToBalance[msg.sender] -= _betAmount;
            return trueorFalse;
        }
        //fire event
    }
}
