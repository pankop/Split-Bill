import Friend from "./Friend";

export default function Friendlist({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => {
        return (
          <Friend
            friend={friend}
            key={index}
            onSelected={onSelected}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
