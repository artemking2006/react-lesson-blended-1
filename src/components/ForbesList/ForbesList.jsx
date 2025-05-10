import PropTypes from "prop-types";
import ForbesListItem from "../ForbesListItem/ForbesListItem";
import style from "./ForbesList.module.css";

const ForbesList = ({ list }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {list.map(({ id, name, avatar, capital, isIncrease }) => (
          <li key={id} className={style.item}>
            <ForbesListItem name={name} avatar={avatar} capital={capital} isIncrease={isIncrease} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ForbesList.PropTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      isIncrease: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ForbesList;