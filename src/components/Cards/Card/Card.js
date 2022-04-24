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
            <label className="p-2 w-100 d-flex gap-2 align-items-start align-items-sm-center flex-column flex-sm-row"
              htmlFor={`week-${props.weeksCounter}-id-${props.id}`}
            >
              <Badge className="border border-light" bg="warning" text="dark">
                <small>Н <time>{props.weeksCounter}</time></small> 
                <br/>
                <small>от <time>{props.mondayCounter} {props.monthCounter}</time> </small>       
              </Badge>
              {props.name} занят?{" "}
              <span className="isChecked">{`${checked ? "Да" : "Нет"}`}</span>
              <Badge className="border border-light" bg={`${props.elder ? "danger" : "success"}`} text="light">
                  <small>{`${props.elder == true ? "С" : "СП/Б"}`}</small>
              </Badge>
              <Badge className="border border-light" bg={`${props.category === "ms" ? "badge bg-danger" : "badge bg-primary"}`} text="light">
                <small>{`${props.category === "ms" ? "Микрофон/Сцена" : "Аудио/Видео"}`}</small>
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
