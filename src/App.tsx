import React from "react";
import { LoadWeb3, selectChain, loadContract } from "./components/Web3";
import { Header } from "./components/Header";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";
import { addElementsToList, getTransferList } from "./components/HandleInputs";
import { MintTokens } from "./components/MintTokens";
import chainInfo from "./assets/static/chainInfo.json";
import contractInfo from "./assets/static/contractInfo.json";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    mintBulkAbi: any;
  }
}

export const App = () => {
  LoadWeb3();

  const [valueaddresses, setAddressesValue] = React.useState('');
  const [transferlist, showTransferList] = React.useState<any[]>([]);
  const [chain, setChain] = React.useState('');
  const [contract, setContract] = React.useState('');

  const handleChainChange = (event: any) => {
    setChain(event.target.value)
    switch (event.target.value) {
      case "xDai":
        selectChain(chainInfo.paramxDai);
        break;
      case "Fantom":
        selectChain(chainInfo.paramFantom);
        break;
      default:
        console.log("Chain not found");
    }
  };

  const handleContractChange = (event: any) => {
    setContract(event.target.value)
    switch (event.target.value) {
      case "AttTestToken":
        loadContract(contractInfo.koiosTestNFTAttendance);
        break;
      case "PresTestToken":
        loadContract(contractInfo.koiosTestNFTPresenter);
        break;
      default:
        console.log("Contract not available");
    }
  };

  const handleAddressesChange = (event: any) => {
    setAddressesValue(event.target.value);
  };

  const updateTransferList = async () => {
    const updatedTransferList = await getTransferList();
    showTransferList(updatedTransferList);
  }

  React.useEffect(() => {
  });

  const handleSubmitButton = async () => {
    await addElementsToList(valueaddresses);
    updateTransferList();
  }

  return (
    <section className="home">
      <section className="chain-contract-selection">
        <div className="chain-contract-selection__select">
          <FormControl variant="outlined" className="chain-contract-selection__select-chain-dropdown">
            <InputLabel>Chain</InputLabel>
            <Select
              value={chain}
              onChange={handleChainChange}
              label="Chain"
            >
              <MenuItem value={"Rinkeby"}>Rinkeby</MenuItem>
              <MenuItem value={"xDai"}>xDai</MenuItem>
              <MenuItem value={"Fantom"}>Fantom</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className="chain-contract-selection__select-contract-dropdown">
            <InputLabel>Contract</InputLabel>
            <Select
              value={contract}
              onChange={handleContractChange}
              label="Contract"
            >
              <MenuItem value={"AttTestToken"}>Attendance Test Token</MenuItem>
              <MenuItem value={"PresTestToken"}>Presenter Test Token</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>
      <section className="token-section">
        <Header />
        <div className="token-section__inputs">
          <TextField className="token-section__addresses"
            label="Addresses"
            value={valueaddresses}
            onChange={handleAddressesChange}
            variant="outlined"
            fullWidth />
          <button
            className="token-section__submit-button"
            onClick={() => handleSubmitButton()}
          >
            Submit
          </button>
          <button
            className="token-section__mint-button"
            onClick={() => MintTokens()}
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

/*
<TextField className="token-section__names"
            label="Names"
            multiline
            value={valuenames}
            onChange={handleNamesChange}
            variant="outlined"
            fullWidth />
*/