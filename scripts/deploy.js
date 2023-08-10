//Imports
const { ethers } = require("hardhat");

async function main() {
  
  const hotpoker = await ethers.deployContract("hotPoker");
  
  console.log("Address is", await hotpoker.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
