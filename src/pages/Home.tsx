import { Link } from 'react-router-dom';

export const Home = () => {
  

  return (
    <div>
      <h2>Koios</h2>
      <Link to="/mintnonfungible">Mint non fungible token</Link>
      <p></p>
      <Link to="/mintbadges">Mint Koios Badges</Link>
      <p></p>
      <Link to="/transferfungibleminor">Transfer Minor Titan tokens</Link>
      <p></p>
      <Link to="/transferfungibledao">Transfer Koios Dao tokens</Link>
    </div>
  );
}