import styles from "./Profile.Module.css";
import FollowBtn from "./follow-btn/FollowBtn.js";

function Profile() {
  // GUI
  return (
    <div>
      {/* <Picture></Picture> */}
      {/* <Info profile={userProfile}></Info> */}
      <FollowBtn />
    </div>
  );
}

export default Profile;
