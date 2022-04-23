import React from "react";
function Card(props) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className={`card px-3 ${checked ? "bg-danger" : ""}`}>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className='m-0 d-flex gap-2 justify-content-between w-100'> 
            <label className="p-2 w-100 d-flex gap-2 align-items-start align-items-sm-center flex-column flex-sm-row" htmlFor={`week-${props.weeksCounter}-id-${props.id}`}>
              {props.name} занят? <span className="isChecked">{checked.toString()}</span>
              <span className={`lh-0 p-3 justify-content-center align-items-center border border-light ${props.elder ? "badge bg-danger" : "badge bg-success"}`}>C</span>
              <span className={`lh-0 p-3 justify-content-center align-items-center border border-light ${props.category === "ms" ? "badge bg-danger" : "badge bg-primary"}`}>{`${props.category === "ms" ? "Микрофон/Сцена" : "Аудио/Видео"}`}</span>
            </label>
            <input
              type="checkbox"
              className={`align-self-center `}
              checked={checked}
              id={`week-${props.weeksCounter}-id-${props.id}`}
              name={props.name}
              value={props.name}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
