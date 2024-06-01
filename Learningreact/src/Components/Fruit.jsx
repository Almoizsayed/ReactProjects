function Fruit() {
  const fruits = ["banana", "Mango", "grapes"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit} </li>
        ))}
      </ul>
    </div>
  );
}
export default Fruit;
