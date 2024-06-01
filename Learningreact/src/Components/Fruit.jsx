function Fruit() {
  const fruits = [
    { name: "Banana", price: 10 },
    { name: "Apple", price: 100 },
    { name: "Grapes", price: 40 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>
            {fruit.name} {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Fruit;
