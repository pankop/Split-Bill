import Friend from "./Friend";

export default function Friendlist({ friends }) {
  return (
    <ul>
      {friends.map((friend, index) => {
        return <Friend friend={friend} key={index} />;
      })}
    </ul>
  );
}
