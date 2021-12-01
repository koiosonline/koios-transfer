import { getAddressList } from "./HandleNftInputs";

export const MintBadges = async (badgeID: any) => {
  let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const addresses = await getAddressList();
  console.log(addresses);
  try {
    await window.mintBadgesAbi.methods.mintBulk(addresses,badgeID).send({ from: accounts[0] });
  }
  catch (e) {
    console.error(e);
  }
}