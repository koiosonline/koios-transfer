import { getAddressList, getAmountList } from "./HandleFtInputs";

export const TransferTokens = async () => {
  let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const addresses = await getAddressList();
  const amounts = await getAmountList();
  console.log(addresses);
  try {
    await window.transferBulkAbi.methods.transferBulk(addresses, amounts).send({ from: accounts[0] });
  }
  catch (e) {
    console.error(e);
  }
}