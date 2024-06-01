function Hello(props) {
  return (
    <div>
      <h1>
        {props.name}
        {props.message}
        {props.seatnumbers}
      </h1>
    </div>
  );
}
export default Hello;
