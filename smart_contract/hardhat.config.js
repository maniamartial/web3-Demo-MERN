// https://eth-mainnet.g.alchemy.com/v2/efXR38GZnylTQiAq5uTQ6ys_Bl5JEMD0
/*require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity: '0.8.0',
  networks:{
    goerli:{
      //url: 'https://eth-mainnet.g.alchemy.com/v2/efXR38GZnylTQiAq5uTQ6ys_Bl5JEMD0',
      //accounts: ['6d2ab60d07b96c3bc5b7cfd95bb68531d26b657d4a2d5b05fcb2e15a9130ccce']
    //rikeby url: 'https://eth-rinkeby.alchemyapi.io/v2/Tzi7X_EN531ZCitsR9Yjwu8tIzpvmCcP',
      //accounts: ['6d2ab60d07b96c3bc5b7cfd95bb68531d26b657d4a2d5b05fcb2e15a9130ccce']    
    url: 'https://eth-goerli.g.alchemy.com/v2/JCQhBgbALTg6MLT6OssDCfm09YB4uzab',
      
    accounts: ['6d2ab60d07b96c3bc5b7cfd95bb68531d26b657d4a2d5b05fcb2e15a9130ccce']
    
    
    }
  
      
      }
}*/

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JCQhBgbALTg6MLT6OssDCfm09YB4uzab',
      
    accounts: ['6d2ab60d07b96c3bc5b7cfd95bb68531d26b657d4a2d5b05fcb2e15a9130ccce']
    },
  },
};