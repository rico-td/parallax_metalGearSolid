import { useState } from "react";
import WalkingBorderBtn from "../../buttons/WalkingBorderBtn/WalkingBorderBtn";

function FollowBtn() {
  const [isFollowing, setIsFollowing] = useState(false);

  function onClickFollow() {
    setIsFollowing(true);
  }

  function onClickUnfollow() {
    setIsFollowing(false);
  }

  if (isFollowing) {
    return (
      <a
        href="#"
        style={{
          backgroundColor: "green",
          position: "relative",
          marginTop: "20px",
        }}
        onClick={onClickUnfollow}
      >
        Following
      </a>
    );
  }

  return (
    <a
      href="#"
      style={{
        backgroundColor: "blue",
        position: "relative",
        marginTop: "20px",
      }}
      onClick={onClickFollow}
    >
      Follow
    </a>
  );
}

export default FollowBtn;
