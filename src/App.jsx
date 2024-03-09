import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSpitBill";
import Friend from "./components/Friend";
import Friendlist from "./components/Friendlist";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Friendlist friends={initialFriends} />
        <Friend />
        <FormAddFriend />
        <button className="button">Tambah teman</button>
      </div>
      <FormSplitBill />
    </div>
  );
}
