import Web3 from "web3";
import mintBulkAbi from "../assets/static/mintBulk-abi.json";
const contractAddress = "0x14AfcB62AC5b2BcB7329968e51c0F9571eB4c84C"; // Rinkeby
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export const LoadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    if (await window.web3.eth.getChainId() !== 4) {
      window.alert("Wrong chain");
    }
    await loadContract();
  } else {
    window.alert("Metamask not detected!");
  }
};

const contractABI = () => {
  const abi = mintBulkAbi;
  return abi;
};

const loadContract = async () => {
  try {
    const result = await new web3.eth.Contract(contractABI() as any, contractAddress);
    window.mintBulkAbi = result;
  } catch (e) {
    console.log(e);
  }
};