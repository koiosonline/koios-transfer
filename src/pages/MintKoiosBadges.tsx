import React from "react";
import { LoadWeb3, selectChain, loadContractBadges } from "../components/Web3";
import { Header } from "../components/Header";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";
import { addElementsToList, getTransferList } from "../components/HandleNftInputs";
import { MintBadges } from "../components/MintBadges";
import chainInfo from "../assets/static/chainInfo.json";
import contractInfo from "../assets/static/contractInfo.json";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    mintBadgesAbi: any;
  }
}

export const MintKoiosBadges = () => {
  LoadWeb3();

  const [valueaddresses, setAddressesValue] = React.useState('');
  const [valueID, setIdValue] = React.useState('');
  const [transferlist, showTransferList] = React.useState<any[]>([]);
  const [chain, setChain] = React.useState('');
  const [contract, setContract] = React.useState('');

  const handleChainChange = (event: any) => {
    setChain(event.target.value)
    switch (event.target.value) {
      case "Rinkeby":
        selectChain(chainInfo.paramRinkeby);
        break;
      default:
        console.log("Chain not found");
    }
  };

  const handleContractChange = (event: any) => {
    setContract(event.target.value)
    switch (event.target.value) {
      case "KoiosTestBadges":
        loadContractBadges(contractInfo.KoiosTestBadges);
        break;
      default:
        console.log("Contract not available");
    }
  };

  const handleAddressesChange = (event: any) => {
    setAddressesValue(event.target.value);
  };

  const handleIdChange = (event: any) => {
    setIdValue(event.target.value);
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
    <section className="mintnonfungible">
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
            </Select>
          </FormControl>

          <FormControl variant="outlined" className="chain-contract-selection__select-contract-dropdown">
            <InputLabel>Contract</InputLabel>
            <Select
              value={contract}
              onChange={handleContractChange}
              label="Contract"
            >
              <MenuItem value={"KoiosTestBadges"}>Koios Test Badge</MenuItem>
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
          <TextField className="token-section__tokenid"
            label="tokenID"
            value={valueID}
            onChange={handleIdChange}
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
            onClick={() => MintBadges(valueID)}
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