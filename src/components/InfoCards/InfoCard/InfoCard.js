import React from "react";
import { Badge } from "react-bootstrap";





function InfoCard(props) {
  return (
    <>
    <div className={"card px-3 mw-25 card-info h-55"}>
       {props.name} занят?{" "}

        <div className="d-flex">
          <Badge className="border border-light" bg={`${props.elder ? "danger" : "success"}`} text="light">
              <small>{`${props.elder == true ? "С" : "СП/Б"}`}</small>
          </Badge>
          <Badge className="border border-light" bg={`${props.category === "ms" ? "badge bg-danger" : "badge bg-primary"}`} text="light">
            <small>{`${props.category === "ms" ? "Микрофон/Сцена" : "Аудио/Видео"}`}</small>
          </Badge>
        </div>
    </div>
    </>
  );
}

export default InfoCard;
