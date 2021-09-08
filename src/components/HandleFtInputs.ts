let transferlist: any = [];
let addresslist: any = [];
let nameslist: any = [];
let amountlist: any = [];

export const addElementsToList = async (names: string, addresses: string, amount:string) => {
  transferlist = [];
  addresslist = [];
  nameslist = [];
  addresslist = addresses.split(',');
  amountlist = amount.split(',');
  console.log(addresslist);
  for (let i = 0; i < addresslist.length; i++) {
    addresslist[i] = addresslist[i].trim();
    amountlist[i] = amountlist[i].trim();
    if (addresslist[i].length !== 42 || amountlist[i] === '0') {
      console.log("Removing item" , addresslist[i], "from index ", i);
      addresslist.splice(i, 1);
      console.log("Removing item" , amountlist[i], "from index ", i);
      amountlist.splice(i, 1);
      i--;
    }
    else {
      let entry = { "address": addresslist[i], "amount": amountlist[i] }
      transferlist.push(entry);
    }
  }
}

export const getTransferList = async () => {
  return transferlist;
}

export const getAddressList = async () => {
  return addresslist;
}

export const getAmountList = async () => {
  return amountlist;
}
