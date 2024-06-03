import { useState } from "react";

export default function Form() {
  const [name, SetName] = useState("raj");
  return (
    <div>
      <form>
        FullName:
        <input type="text" onBlur={(e) => SetName(e.target.value)} />
        <h1>{name}</h1>
      </form>

      {/* <h1>{{ name }}</h1> */}
    </div>
  );
}
