# hot-poker
poker game, kinda, not really.

**LOCAL DEPLOYMENT**

**Local webserver** 
First we want to install package http-server
```npm install http-server //optionally use -g flag to install globally ```
To specify a folder to open in browser upon starting server:
```http-server -o ./index.html```

**SOLCJS (Replace with hardhat)**
Initialize a project:
```npm init```
Intall solcjs dependencies:
```npm install -g solcjs```
Compile the smart contract to receive ABI + BIN (To be used in deploy.js with etherjs)
``` solcjs --bin --abi --include-path node_modules/ --base-path . -o . Game.sol ```
(This can be added to package.json to automate)





