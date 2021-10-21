import React from "react";
import { LoadWeb3, loadContractFT } from "../components/Web3";
import { Header } from "../components/Header";
import TextField from "@material-ui/core/TextField";
import { addElementsToList, getTransferList } from "../components/HandleFtInputs";
import { TransferTokens } from "../components/TransferTokens";
import contractInfo from "../assets/static/contractInfo.json";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    transferBulkAbi: any;
  }
}

export const TransferFungibleArbitrum = () => {
  LoadWeb3();

  const [valuenames, setNamesValue] = React.useState('');
  const [valueaddresses, setAddressesValue] = React.useState('');
  const [valueamount, setAmountValue] = React.useState('');
  const [transferlist, showTransferList] = React.useState<any[]>([]);

  loadContractFT(contractInfo.KoiosTitanToken);

  const handleNamesChange = (event: any) => {
    setNamesValue(event.target.value);
  };

  const handleAddressesChange = (event: any) => {
    setAddressesValue(event.target.value);
  };

  const handleAmountChange = (event: any) => {
    setAmountValue(event.target.value);
  };

  const updateTransferList = async () => {
    const updatedTransferList = await getTransferList();
    showTransferList(updatedTransferList);
  }

  React.useEffect(() => {
  });

  const handleSubmitButton = async () => {
    await addElementsToList(valuenames, valueaddresses, valueamount);
    updateTransferList();
  }

  return (
    <section className="transferfungible">
      <section className="fungibletoken-section">
        <Header />
        <div className="fungibletoken-section__inputs">
          <TextField className="fungibletoken-section__names"
            label="Names (optional)"
            value={valuenames}
            onChange={handleNamesChange}
            variant="outlined"
            fullWidth />
          <TextField className="fungibletoken-section__addresses"
            label="Addresses"
            value={valueaddresses}
            onChange={handleAddressesChange}
            variant="outlined"
            fullWidth />
          <TextField className="fungibletoken-section__amount"
            label="Amount"
            value={valueamount}
            onChange={handleAmountChange}
            variant="outlined"
            fullWidth />
          <button
            className="fungibletoken-section__submit-button"
            onClick={() => handleSubmitButton()}
          >
            Submit
          </button>
          <button
            className="fungibletoken-section__mint-button"
            onClick={() => TransferTokens()}
          >
            Transfer Tokens
          </button>
        </div>

        <div className="token-section__transferlist">
          <table className="token-section__transferlisttable">
            <thead>
              <tr>
                <th>Address</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transferlist.map((users: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>{users.address}</td>
                    <td>{users.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}