require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.2",
      },
      {
        version: "0.8.20",
        settings: {},
      },
    ],
  },
  networks: {
    hardhat: {
    },
    Rarichain: {
      url: "https://testnet.rpc.rarichain.org/http",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
