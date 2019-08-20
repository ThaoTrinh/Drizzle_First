var SimpleBank = artifacts.require("SimpleBank");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SimpleBank);
};
