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

    function withdrawFunds(uint256 _withdrawalAmount) external {
        require(_withdrawalAmount > 0, "Must withdraw some amount");
        addressToBalance[msg.sender] -= _withdrawalAmount;
        payable(msg.sender).transfer(_withdrawalAmount);
    }

    function getRandomNumber() public view returns (uint256) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)));
        return (randomNumber % 100) + 1;
    }

    function checkBalance() public view returns (uint) {
        return addressToBalance[msg.sender];
    }

    function playAGame(uint256 _betAmount) external returns(bool){
        require(_betAmount > 0, "You must bet some amount");
        addressToBalance[msg.sender] -= _betAmount;
        uint256 letsGetANumber = getRandomNumber();
    
        if(letsGetANumber < 50){
           addressToBalance[msg.sender] += _betAmount * 2;
            return true;
        } else {
            return false;
    }

    }
}

