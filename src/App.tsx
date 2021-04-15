import React from "react";
import { LoadWeb3 } from "./components/LoadWeb3";
import { Header } from "./components/Header";
import TextField from "@material-ui/core/TextField";
import { addElementsToList, getTransferList } from "./components/HandleInputs";
import { MintTokens } from "./components/MintTokens"

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    mintBulkAbi: any;
  }
}

export const App = () => {
  LoadWeb3();

  const [valuenames, setNamesValue] = React.useState('');
  const [valueaddresses, setAddressesValue] = React.useState('');
  const [transferlist, showTransferList] = React.useState<any[]>([]);

  const handleNamesChange = (event: any) => {
    setNamesValue(event.target.value);
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
    await addElementsToList(valuenames, valueaddresses);
    updateTransferList();
  }

  return (
    <section className="home">
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
                <th>Name</th>
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