import {useState, useEffect} from "react";
import { Badge } from "react-bootstrap";

function CheckboxCard(props) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prevState => !prevState);
    if(!localStorage.getItem(`week-${props.weeksCounter}-id-${props.id}`)) {
      localStorage.setItem(`week-${props.weeksCounter}-id-${props.id}`, `week-${props.weeksCounter}-id-${props.id}`);
    } else if (localStorage.getItem(`week-${props.weeksCounter}-id-${props.id}`)) {
      localStorage.removeItem(`week-${props.weeksCounter}-id-${props.id}`)
    }
  };
  useEffect(() => {
    if(localStorage.getItem(`week-${props.weeksCounter}-id-${props.id}`)) {
      setChecked(prevState => !prevState);
    }
  }, [])

  return (
    <>
      <div 
      title={`${props.name} | Неделя ${props.weeksCounter} от ${props.mondayCounter} ${props.monthCounter} `} 
      className={`h-55 card px-2 ${checked ? "bg-danger" : ""}`}>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="m-0 d-flex gap-2 position-relative justify-content-between w-100">
            <label className="p-2 w-100 d-flex gap-2 align-items-start align-items-sm-center flex-column flex-sm-row"
              htmlFor={`week-${props.weeksCounter}-id-${props.id}`}
            >
              <Badge className="border border-light" bg="warning" text="dark">
                <small>Н <time>{props.weeksCounter}</time></small> 
                <br/>
                <small>от <time>{props.mondayCounter} {props.monthCounter}</time> </small>       
              </Badge>
            </label>
            <input
              type="checkbox"
              className={`align-self-center position-absolute end-0`}
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

export default CheckboxCard;
