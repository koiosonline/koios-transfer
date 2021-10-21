import { getAddressList, getAmountList } from "./HandleFtInputs";
import contractInfo from "../assets/static/contractInfo.json";

export const TransferKoiosDaoTokens = async () => {
  let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const addresses = await getAddressList();
  let amounts = await getAmountList();
  for (var i = 0; i < amounts.length; i++) {
    amounts[i] = BigInt(parseInt(amounts[i]) * (10 ** 18));
  }
  console.log(addresses);
  try {
    await window.giveAwayAbi.methods.Giveaway(addresses, amounts, contractInfo.GiveAwayContract.address).send({ from: accounts[0] });
  }
  catch (e) {
    console.error(e);
  }
}