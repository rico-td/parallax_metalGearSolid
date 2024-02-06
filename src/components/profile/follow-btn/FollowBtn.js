import { useState } from "react";
import "../../buttons/WalkingBorderBtn/WalkingBorderBtn.Module.css";

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
          maxWidth: "150px",
          borderRadius: "5px",
        }}
        onClick={onClickUnfollow}
      >
        Following
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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
        width: "150px",
        maxWidth: "150px",
        borderRadius: "5px",
      }}
      onClick={onClickFollow}
    >
      Follow
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}

export default FollowBtn;
