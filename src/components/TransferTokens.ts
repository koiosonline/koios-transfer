import { getAddressList } from "./HandleFtInputs";

export const TransferTokens = async () => {
  let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const addresses = await getAddressList();
  console.log(addresses);
  try {
    await window.mintBulkAbi.methods.mintBulk(addresses).send({ from: accounts[0] });
  }
  catch (e) {
    console.error(e);
  }
}