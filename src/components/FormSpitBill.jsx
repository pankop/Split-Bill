export default function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Patungan bareng si X</h2>

      <label htmlFor="">💵Total tagihan</label>
      <input type="text" name="" id="" />

      <label htmlFor="">👨🏽Tagihan kamu</label>
      <input type="text" name="" id="" />

      <label htmlFor="">🧑🏽‍🦱Tagihan X</label>
      <input type="text" name="" id="" />

      <label htmlFor="">🧾Ditalangin sama siapa</label>
      <select name="" id="">
        <option value="" className="user">
          Kamu
        </option>
        <option value="" className="friend">
          X
        </option>
      </select>

      <button className="button">Submit</button>
    </form>
  );
}
