import React from "react";
import { Badge } from "react-bootstrap";

function Card(props) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className={`card px-3 ${checked ? "bg-danger" : ""}`}>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="m-0 d-flex gap-2 justify-content-between w-100">
            <label
              className="p-2 w-100 d-flex gap-2 align-items-start align-items-sm-center flex-column flex-sm-row"
              htmlFor={`week-${props.weeksCounter}-id-${props.id}`}
            >
              <Badge bg="warning" text="dark">
                Н {props.weeksCounter}
              </Badge>
              {props.name} занят?{" "}
              <span className="isChecked">{`${checked ? "Да" : "Нет"}`}</span>
              <Badge bg={`${props.elder ? "danger" : "success"}`} text="light">
                {`${props.elder == true ? "С" : "СП/Б"}`}
                </Badge>
              <Badge bg={`${props.category === "ms" ? "badge bg-danger" : "badge bg-primary"}`} text="light">
                {`${props.category === "ms" ? "Микрофон/Сцена" : "Аудио/Видео"}`}
              </Badge>
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
