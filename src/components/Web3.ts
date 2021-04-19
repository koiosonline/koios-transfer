import Web3 from "web3";
import mintBulkAbi from "../assets/static/mintBulk-abi.json";
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export const LoadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);

    await newChain();
    await newActs();

    window.ethereum.on('accountsChanged', newActs)
    window.ethereum.on('chainChanged', newChain);
    window.ethereum.on('networkChanged', newChain);  // depricated / still used in metamask mobile
    window.ethereum.on('chainIdChanged', newChain);  // depricated / temp workaround
    window.ethereum.autoRefreshOnNetworkChange = false; // temp workaround  // doesn't work on metamask mobile

  } else {
    window.alert("Metamask not detected!");
  }
};

const contractABI = () => {
  const abi = mintBulkAbi;
  return abi;
};

export const loadContract = async (tokeninfo: any) => {
  try {
    if (tokeninfo.chainId === await window.web3.eth.getChainId()) {
      const result = await new web3.eth.Contract(contractABI() as any, tokeninfo.address);
      window.mintBulkAbi = result;
    }
    else {
      window.alert(`change your metamask wallet to ${tokeninfo.chainName}`);
      console.log("You are on the wrong chain");
    }
  } catch (e) {
    console.log(e);
  }
};

const newChain = async () => {
  let chainId = await window.web3.eth.getChainId();
  let networkId = await window.web3.eth.net.getId();
  console.log(`We are on chain: ${chainId} and network ${networkId}`)
}

const newActs = async () => {
  let acts = await web3.eth.getAccounts()
  console.log(`We have accounts: ${JSON.stringify(acts)}`);
}

export const selectChain = (param: any) => {

  window.ethereum.request({ method: 'wallet_addEthereumChain', params: param });
}