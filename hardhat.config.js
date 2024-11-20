require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "m1",
  networks: {
    hardhat: {},
    m1: {
      url: "https://mevm.devnet.imola.movementlabs.xyz",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 30732,
    },
  },
  solidity: {
    version: "0.8.21",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
