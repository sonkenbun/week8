require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://eth-goerli.g.alchemy.com/v2/3sB9wPpR16ivMEGbp16J83uHLbkyNWU1",
       accounts: ["4aa0046ac8c8d9fa93a9c3d49a1fdfc7e36b9876fa5e1ed23b1bd5d291fa2516"]
    }
  }

};
