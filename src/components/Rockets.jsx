import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRocket } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rocket } = useSelector((state) => state.rocket);
  const { status } = useSelector((state) => state.rocket);

  useEffect(() => {
    if (status === false) dispatch(getRockets());
  }, [dispatch, status]);

  return (
    <div className="rockets-container">
      {status && rocket.map((rocket) => (
        <div key={rocket.id}>
          <div className="article">
            <img src={rocket.image} alt={rocket.name} className="rocket-image" />
          </div>
          <h2 className="rocket-title">{rocket.name}</h2>
          <p className="rocket-details">
            {rocket.reserved && <span className="reserved">Reserved</span>}
            {rocket.description}
          </p>
          <button
            type="button"
            className={rocket.reserved ? 'unreserve' : 'reserve'}
            onClick={() => dispatch(reserveRocket(rocket.id))}
          >
            {rocket.reserved ? 'cancel reserve' : 'reserve rocket'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
