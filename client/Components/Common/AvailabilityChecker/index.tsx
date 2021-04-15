import { useState } from "react";
import Form from "react-bootstrap/Form";
import "react-datepicker/dist/react-datepicker.css";
import CustomBtn from "../CustomBtn";
import CustomDatePicker from "./CustomDatePicker";

const AvailabilityChecker = () => {
  const [arrive, setArrive] = useState<any>(new Date());
  const [departure, setDeparture] = useState<any>(new Date());

  const handleArrive = (date: Date) => {
    setArrive(date);
  };

  const handleDeparture = (date: Date) => {
    setDeparture(date);
  };

  return (
    <div className="AvailabilityChecker text-capitalize">
      <h2 className="AvailabilityChecker__heading header-2">
        check Availability
      </h2>
      <Form>
        <CustomDatePicker
          state={arrive}
          fun={handleArrive}
          placeholder="Check In:"
        />

        <CustomDatePicker
          state={departure}
          fun={handleDeparture}
          placeholder="Check Out:"
        />

        <Form.Group>
          <Form.Label>Guests:</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Form.Label>price:</Form.Label>
          <Form.Control />
        </Form.Group>

        <CustomBtn BtnType="submit" name="check availability" />
      </Form>
    </div>
  );
};

export default AvailabilityChecker;
