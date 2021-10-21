let transferlist: any = [];
let addresslist: any = [];

export const addElementsToList = async (addresses: string) => {
  transferlist = [];
  addresslist = [];
  addresslist = addresses.split(',');
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