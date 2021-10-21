import { getAddressList, getAmountList } from "./HandleFtInputs";

export const TransferTokens = async () => {
  let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const addresses = await getAddressList();
  let amounts = await getAmountList();
  for (var i = 0; i < amounts.length; i++) {
    amounts[i] = BigInt(parseInt(amounts[i]) * (10 ** 18));
  }
  console.log(addresses);
  try {
    await window.transferBulkAbi.methods.transferBulk(addresses, amounts).send({ from: accounts[0] });
  }
  catch (e) {
    console.error(e);
  }
}