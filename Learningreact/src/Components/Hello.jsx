function Hello(props) {
  return (
    <div>
      <h1>
        {props.person.name}
        {props.person.message}
        {props.person.seatnumbers}
      </h1>
    </div>
  );
}
export default Hello;
