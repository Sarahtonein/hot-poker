// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract hotPoker is Ownable, VRFV2WrapperConsumerBase {
    uint32 internal callbackGasLimit = 100000;
    uint16 internal requestConfirmations = 3;
    uint32 internal numWords = 1;

    //0x326C977E6efc84E512bB9C30f76E30c160eD06FB - LINK Goerli Token address
    //0x708701a1DfF4f478de54383E49a627eD4852C816 - VRF Wrapper

    //Do we take the balance from the users mapping when a bet is placed?
    //Can this be exploited if we don't?

    /*@DEV TODO
        //Implement events and error handling
        */
    constructor(
        address _link,
        address _vrfV2Wrapper
    ) Ownable() VRFV2WrapperConsumerBase(_link, _vrfV2Wrapper) {}

    //lastRequestId() - get the ID of your request
    //Add our options as an enum.

    enum FlowerTypes {
        Blue,
        Red,
        Orange,
        Assorted,
        Mixed,
        Purple,
        Yellow,
        White,
        Black
    }

    mapping(address => uint256) public addressToBalance;
    mapping(address => string) public currentGuess;
    mapping(address => uint256) public gambleAmount;
    mapping(address => uint256) public winOrLose;

    event randomEvent(uint256 _random);
    event requestIdEvent(uint256 _requestId);
    event debugEvent(string _str);
    event flowerResult(FlowerTypes flower);

    event flowerTypeEvent(FlowerTypes flower);

    function playAGame(
        uint256 _gambleAmount,
        string memory _hotOrCold
    ) external {
        require(addressToBalance[msg.sender] > 0, "Must bet some amount");
        if (
            keccak256(abi.encodePacked(_hotOrCold)) !=
            keccak256(abi.encodePacked("Hot")) &&
            keccak256(abi.encodePacked(_hotOrCold)) !=
            keccak256(abi.encodePacked("Cold"))
        ) {
            revert("Must pick hot or cold"); // require(_gambleAmount > 0, "Must play with some amount");
            //Do we or can we call the other functions here to get the result?
        }
        currentGuess[msg.sender] = _hotOrCold;
        gambleAmount[msg.sender] = _gambleAmount;

        requestRandomness(callbackGasLimit, requestConfirmations, numWords);
    }

    function calculateFlowerColor(
        uint256 _random
    ) internal returns (FlowerTypes) {
        //this fires
        emit randomEvent(_random);
        if (_random < 70000) return FlowerTypes.Red;
        else if (_random < 200000) return FlowerTypes.Blue;
        else if (_random < 350000) return FlowerTypes.Yellow;
        else if (_random < 450000) return FlowerTypes.Purple;
        else if (_random < 650000) return FlowerTypes.Orange;
        else if (_random < 800000) return FlowerTypes.Mixed;
        else if (_random < 900000) return FlowerTypes.Assorted;
        else if (_random < 999000) return FlowerTypes.Black;
        else return FlowerTypes.White;
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override(VRFV2WrapperConsumerBase) {
        emit requestIdEvent(_requestId);
        // uint256 random = _randomWords[0] % 1000000;
        emit debugEvent("Before flowerTypeEvent");
        FlowerTypes flower = calculateFlowerColor(_randomWords[0] % 1000000);
        //Indicating this is called^^
        emit debugEvent("After flowerTypeEvent");

        bytes32 hotHash = keccak256(abi.encodePacked("Hot"));
        bytes32 coldHash = keccak256(abi.encodePacked("Cold"));
        bytes32 guessHash = keccak256(
            abi.encodePacked(currentGuess[msg.sender])
        );

        if (
            flower == FlowerTypes.Mixed ||
            flower == FlowerTypes.Black ||
            flower == FlowerTypes.White
        ) {
            emit flowerResult(flower);
            if (flower == FlowerTypes.Black || flower == FlowerTypes.White) {
                addressToBalance[msg.sender] += gambleAmount[msg.sender] * 5;
            } else {
                addressToBalance[msg.sender] -= gambleAmount[msg.sender];
                winOrLose[msg.sender] -= 1;
            }
        } else {
            if (
                (guessHash == hotHash &&
                    (flower == FlowerTypes.Red ||
                        flower == FlowerTypes.Orange ||
                        flower == FlowerTypes.Yellow)) ||
                (guessHash == coldHash &&
                    (flower == FlowerTypes.Blue ||
                        flower == FlowerTypes.Purple ||
                        flower == FlowerTypes.Assorted))
            ) {
                emit flowerResult(flower);
                addressToBalance[msg.sender] += gambleAmount[msg.sender] * 2;
                winOrLose[msg.sender] += 1;
            } else {
                emit flowerResult(flower);
                addressToBalance[msg.sender] += gambleAmount[msg.sender] * 2;
            }
        }
    }

    function depositFunds() external payable {
        addressToBalance[msg.sender] += msg.value;
    }

    function withdrawFunds(uint256 _withdrawalAmount) external {
        require(_withdrawalAmount > 0, "Must withdraw some amount");
        addressToBalance[msg.sender] -= _withdrawalAmount;
        payable(msg.sender).transfer(_withdrawalAmount);
    }

    function checkBalance() external view returns (uint) {
        return addressToBalance[msg.sender];
    }
}

/*function withdrawLink() external onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(linkAddress);
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }*/
