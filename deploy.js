const { ethers, upgrades } = require("hardhat");

async function main() {
  try {
    // Specify the private key of the deployer account
    const privateKey = "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";
    const providerURL = "http://localhost:8545"; // URL for the local Hardhat network

    // Create a new provider using the URL
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    // Create a new wallet instance for the deployer using the private key and provider
    const deployerWallet = new ethers.Wallet(privateKey, provider);

    console.log("Deploying contracts with the account:", deployerWallet.address);

    // Load your smart contract
    const Contract = await ethers.getContractFactory("Game");
    const contract = await upgrades.deployProxy(Contract, [], { initializer: "initialize" });

    await contract.deployed();

    console.log("Contract deployed to address:", contract.address);
  } catch (error) {
    console.error("Deployment error:", error);
    process.exit(1);
  }
}

main();