const { Certificate } = require("crypto");

var Certification = artifacts.require("Certification");


module.exports = function(deployer) {
  deployer.deploy(Certification);
 
};