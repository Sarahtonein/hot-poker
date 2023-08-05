const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    
    const provider = new ethers.providers.JsonRpcProvider("http://172.19.240.1:7545");

    const wallet = new ethers.Wallet("0x2ba13968c3d853e9aa859dc82db8827f5da3f779b6dad4ffe4cbfd15183e0cb6", provider);
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