import { useState } from "react";

export default function Form() {
  const [name, SetName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        FullName:
        <input
          type="text"
          onChange={(e) => SetName({ ...name, firstName: e.target.value })}
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(e) => SetName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />
        <h1>{name.firstName}</h1>
        <h1>{name.lastName}</h1>
      </form>

      {/* <h1>{{ name }}</h1> */}
    </div>
  );
}
