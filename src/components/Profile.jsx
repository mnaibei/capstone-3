import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((store) => store.missions.missions);
  const rocket = useSelector((store) => store.rocket.rocket);

  const myMissions = missions.filter((mission) => mission.reserved);
  const myRockets = rocket.filter((rocket) => rocket.reserved);

  return (
    <>
      <div className="mission-profile-container">
        <h2 className="mission-title">My Missions</h2>
        <table className="profile-table">
          <tbody>
            <>
              {myMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
      <div className="rockets-profile-container">
        <h2 className="myRockets">my rockets</h2>
        <table className="profile-table">
          <tbody>
            <>
              {myRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;
