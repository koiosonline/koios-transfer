let transferlist: any = [];
let addresslist: any = [];

export const addElementsToList = async (names: string, addresses: string, amount:string) => {
  transferlist = [];
  addresslist = [];
  addresslist = addresses.split(',');
  console.log(addresslist);
  for (let i = 0; i < addresslist.length; i++) {
    addresslist[i] = addresslist[i].trim();
    console.log(addresslist[i])
    if (addresslist[i].length !== 42) {
      console.log("Removing item" , addresslist[i], "from index ", i);
      addresslist.splice(i, 1);
      i--;
    }
    else {
      let entry = { "address": addresslist[i] }
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