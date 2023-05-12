import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRocket } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocket, status } = useSelector((store) => store.rocket);

  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    if (status === false) dispatch(getRockets());
  }, [dispatch, status]);

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
    setReserved(!reserved);
  };

  return (
    <div className="rockets-container">
      {status && rocket.map((rocket) => (
        <div key={rocket.id}>
          <div className="article">
            <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          </div>
          <h2 className="rocket-title">{rocket.name}</h2>
          <p className="rocket-details">
            {reserved && <span className="reserved">Reserved</span>}
            {rocket.description}
          </p>
          <button
            type="button"
            className={reserved ? 'unreserve' : 'reserve'}
            onClick={() => handleReserveRocket(rocket.id)}
          >
            {reserved ? 'cancel reserve' : 'reserve rocket'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
