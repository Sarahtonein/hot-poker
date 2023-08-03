const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");

    const wallet = new ethers.Wallet("0x424d3b78208f41b6685e776791b4a8db03585f21d7d7069dae492b0b7d6a0366", provider);
    const abi = fs.readFileSync("./Game_sol_Game.abi", "utf8");
    const binary = fs.readFileSync("./Game_sol_Game.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("deploying.. please wait..");
    const contract = await contractFactory.deploy(); // stop here, wait for contract to finish
    console.log(contract);
}

main()
.then(() => process.exit(0))
.catch((error)=> console.log(error));