import Todoitem from "./todoitem";

function Todoitems({ itemsv }) {
  return (
    <>
      {itemsv.map((item) => (
        <Todoitem name={item.name} date={item.date} key={item.name}></Todoitem>
      ))}
    </>
  );
}

export default Todoitems;
