import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission, cancelMission } from '../redux/missions/missionSlice';

const Missions = () => {
  const { missions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };
  const handleCancelMission = (missionId) => {
    dispatch(cancelMission(missionId));
  };

  return (
    <div>
      <table>
        <thead>
          <tr className="tableHeader-row">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.missionId} className="mission-row">
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-desc">{mission.description}</td>
              <td className="mission-res">
                {mission.reserved ? (
                  <button className="member-button" type="button">
                    Active Member
                  </button>
                ) : (
                  <button className="member-button" type="button">
                    NOT A MEMBER
                  </button>
                )}
              </td>
              <td className="mission-res">
                {mission.reserved ? (
                  <button
                    className="mission-button"
                    type="button"
                    onClick={() => handleCancelMission(mission.missionId)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="mission-button"
                    type="button"
                    onClick={() => handleJoinMission(mission.missionId)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
