import GrocerryList from "./GrocerryList";

function Grocerry() {
  const items = [
    { id: 1, name: "Milk" },
    { id: 2, name: "Tea" },
    { id: 3, name: "Fruits" },
    { id: 4, name: "Meat" },
  ];
  return (
    <div>
      {items.map((item) => {
        return (
          <>
            <GrocerryList name={item.name} id={item.id} />
          </>
        );
      })}
    </div>
  );
}

export default Grocerry;
