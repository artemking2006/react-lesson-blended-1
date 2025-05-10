import PropTypes from 'prop-types';
import { FaRegThumbsUp } from 'react-icons/fa';
 import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
 import { GiTreeDoor } from 'react-icons/gi';
import style from './Statistics.module.css';
 
const iconMap = {
  'Happy Customers': <FaRegThumbsUp size={32} />,
  'Registered Members': <MdPeople size={32} />,
  'Available Products': <MdOutlineProductionQuantityLimits size={32} />,
  'Saved Trees': <GiTreeDoor size={32} />,
};

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => (
          <li key={id} className={style.item}>
            {iconMap[title]}
            <span className={style.counter}>{total}</span>
            <p className={style.text}>{title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
