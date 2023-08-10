//Imports
const { ethers } = require("hardhat");

async function main() {
  
  const hotPoker = await ethers.deployContract("hotPoker");
  
  console.log("Address is", await hotPoker.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
