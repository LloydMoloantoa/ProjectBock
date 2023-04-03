const Crowdfunding = artifacts.require('./Crowdfunding.sol')

module.exports = function(deployer) {
  deployer.deploy(
    Crowdfunding,
    'Test campaign',
    1,
    5 * 24 * 60, // 5 days
    '0xc25730A4fA9b31D4A32B6e0969F1aD4DEA51AA54'
  )
}