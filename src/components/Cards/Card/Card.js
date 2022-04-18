import React from "react";
function Card(props) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="card">
        <input
          type="checkbox"
          checked={checked}
          id={props.id}
          name={props.name}
          value={props.name}
          onChange={handleChange}
        />
        {/* <label for={props.id}> {props.name}</label> */}

        <p> {props.name} занят? {checked.toString()}</p>
      </div>
    </>
  );
}

export default Card;
