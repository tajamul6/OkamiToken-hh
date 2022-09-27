const { network } = require("hardhat");
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config");
const { verify } = require("../verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const okamiToken = await deploy("OkamiToken", {
    from: deployer,
    args: [INITIAL_SUPPLY],
    logs: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log(`OkamiToken deployed at ${okamiToken.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(okamiToken.address, [INITIAL_SUPPLY]);
  }
};

module.exports.tags = ["all", "token"];
