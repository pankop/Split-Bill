import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user"); // ini defaultnya user karena kita akan mengikuti nanti di aturan logika siapa yang akan membayarnya pada form palingb awah

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h1>Tes</h1>
      <h2>Patungan bareng si {selectedFriend.name}</h2>

      <label htmlFor="">💵Total tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="">👨🏽Tagihan kamu</label>
      <input
        type="text"
        name=""
        id=""
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">🧑🏽‍🦱Tagihan {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />

      <label htmlFor="">🧾Ditalangin sama siapa</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user" className="user">
          Kamu
        </option>
        <option value="friend" className="friend">
          {selectedFriend.name}
        </option>
      </select>

      <button className="button">Submit</button>
    </form>
  );
}
