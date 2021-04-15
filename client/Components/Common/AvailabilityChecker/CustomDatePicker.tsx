import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

export interface IDatePicker {
  state: Date;
  fun: Function;
  placeholder: string;
}

const CustomDatePicker: React.FC<IDatePicker> = ({
  state,
  fun,
  placeholder,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Label>{placeholder}</Form.Label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={state}
          className="calender form-control"
          calendarClassName="customCalender"
          onChange={date => fun(date)}
          showDisabledMonthNavigation
          minDate={new Date()}
        />
      </Form.Group>
    </>
  );
};

export default CustomDatePicker;
