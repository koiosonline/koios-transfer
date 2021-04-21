import React from "react";
import { LoadWeb3, loadContract } from "../components/Web3";
import { Header } from "../components/Header";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";
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

export const Transferfungible = () => {
  LoadWeb3();

  const [valuenames, setNamesValue] = React.useState('');
  const [valueaddresses, setAddressesValue] = React.useState('');
  const [valueamount, setAmountValue] = React.useState('');
  const [transferlist, showTransferList] = React.useState<any[]>([]);
  const [token, setToken] = React.useState('');

  const handleContractChange = (event: any) => {
    setToken(event.target.value)
    switch (event.target.value) {
      case "TitanToken":
        loadContract(contractInfo.TitanToken);
        break;
      case "T1tanToken":
        loadContract(contractInfo.T1tanToken);
        break;
      default:
        console.log("Contract not available");
    }
  };

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
      <section className="token-selection">
        <div className="token-selection__select">
          <FormControl variant="outlined" className="token-selection__select-token-dropdown">
            <InputLabel>Contract</InputLabel>
            <Select
              value={token}
              onChange={handleContractChange}
              label="Token"
            >
              <MenuItem value={"TitanToken"}>Titan Token</MenuItem>
              <MenuItem value={"T1tanToken"}>T1tan Token</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>
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
            Mint Tokens
          </button>
        </div>

        <div className="token-section__transferlist">
          <table className="token-section__transferlisttable">
            <thead>
              <tr>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {transferlist.map((users: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>{users.address}</td>
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