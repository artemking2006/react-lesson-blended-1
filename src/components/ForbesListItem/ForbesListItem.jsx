import PropTypes from "prop-types";
import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css';

const ForbesListItem = ({ avatar, name, capital, isIncrease }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt={name} />
      <h3 className={style.title}>{name}</h3>
      <span className={style.capital}>{capital}
      <BiDollarCircle color="#2196f3" size={22} />
      {isIncrease ? <FcBullish size={22} /> : <FcBearish size={22} />}
      </span>
    </>
  );
};

ForbesListItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.number.isRequired,
  isIncrease: PropTypes.bool.isRequired,
};

export default ForbesListItem;
