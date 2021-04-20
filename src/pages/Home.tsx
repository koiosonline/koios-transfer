import { Link } from 'react-router-dom';

export const Home = () => {
  

  return (
    <div>
      <h2>Koios</h2>
      <Link to="/mintnonfungible">Mint non fungible token</Link>
      <p></p>
      <Link to="/transferfungible">Transfer ERC20 tokens</Link>
    </div>
  );
}