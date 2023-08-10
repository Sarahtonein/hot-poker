// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract hotPoker is Ownable, VRFV2WrapperConsumerBase {
    uint256 internal callbackGasLimit = 100000; // Example value
    uint256 internal requestConfirmations = 3; // Example value
    uint32 internal numWords = 1; // Example value

    enum FlowerColor {
        Red,
        Blue,
        Yellow,
        Purple,
        Orange,
        Mixed,
        Assorted,
        Black,
        White
    }

    enum Guess {
        Hot,
        Cold
    }

    mapping(address => Guess) public addressToGuess;
    mapping(address => uint256) public addressToBet;
    mapping(address => uint256) public addressToRequestId;
    mapping(address => uint) public addressToBalance;

    constructor(
        address _linkToken,
        address _vrfWrapper
    ) Ownable() VRFV2WrapperConsumerBase(_linkToken, _vrfWrapper) {}

    function plantASeed(Guess _playerGuess) external {
        require(
            _playerGuess == Guess.Hot || _playerGuess == Guess.Cold,
            "Invalid guess"
        );
        addressToGuess[msg.sender] = _playerGuess;
        requestRandomness(callbackGasLimit, requestConfirmations, numWords);
    }

    function calculateFlowerColor(
        uint256 _random
    ) internal pure returns (FlowerColor) {
        if (_random < 14080) return FlowerColor.Red;
        else if (_random < 29310) return FlowerColor.Blue;
        else if (_random < 43675) return FlowerColor.Yellow;
        else if (_random < 62160) return FlowerColor.Purple;
        else if (_random < 76000) return FlowerColor.Orange;
        else if (_random < 89666) return FlowerColor.Mixed;
        else if (_random < 99744) return FlowerColor.Assorted;
        else if (_random < 99944) return FlowerColor.Black;
        else return FlowerColor.White;
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        require(_randomWords.length > 0, "No random words provided");

        // Get the first random number from the array
        uint256 random = _randomWords[0] % 1000000; // Ensure the random number is within 0-999999 range

        FlowerColor flower = calculateFlowerColor(random);
        Guess playerGuess = addressToGuess[msg.sender];
        uint256 betAmount = addressToBet[msg.sender];

        if (
            (flower == FlowerColor.Red ||
                flower == FlowerColor.Yellow ||
                flower == FlowerColor.Orange) && playerGuess == Guess.Hot
        ) {
            addressToBalance[msg.sender] += betAmount * 2;
        } else if (
            (flower == FlowerColor.Blue ||
                flower == FlowerColor.Purple ||
                flower == FlowerColor.Assorted) && playerGuess == Guess.Cold
        ) {
            addressToBalance[msg.sender] += betAmount * 2;
        } else {
            addressToBalance[msg.sender] -= betAmount;
        }

        // Clear player data
        delete addressToGuess[msg.sender];
        delete addressToBet[msg.sender];
        delete addressToRequestId[msg.sender];

        // Your other existing logic to handle fulfilled random words
    }

    function depositFunds() external payable {
        addressToBalance[msg.sender] += msg.value;
        // Fire event
    }

    function withdrawFunds(uint256 _withdrawalAmount) external {
        require(_withdrawalAmount > 0, "Must withdraw some amount");
        addressToBalance[msg.sender] -= _withdrawalAmount;
        payable(msg.sender).transfer(_withdrawalAmount);
    }

    function checkBalance() external view returns (uint) {
        return addressToBalance[msg.sender];
    }

    function playAGame(uint256 _betAmount, Guess _playerGuess) external {
        require(_betAmount > 0, "You must bet some amount");
        require(
            _playerGuess == Guess.Hot || _playerGuess == Guess.Cold,
            "Invalid guess"
        );
        require(
            addressToBalance[msg.sender] >= _betAmount,
            "Insufficient balance"
        );

        addressToBet[msg.sender] = _betAmount;
        plantASeed(_playerGuess);
    }

    /*function withdrawLink() external onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(linkAddress);
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }*/
}
