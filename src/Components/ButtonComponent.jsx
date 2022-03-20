import DiceIcon from '../Assets/icon-dice.svg';

const ButtonComponent = ({ generateQuote }) => {
  return (
    <button className='btn' onClick={generateQuote}>
      <img src={DiceIcon} alt='+' />
    </button>
  );
};
export default ButtonComponent;
