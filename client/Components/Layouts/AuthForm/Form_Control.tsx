import Form from "react-bootstrap/Form";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";

export interface IForm_Control {
  title: string;
  errors: DeepMap<FieldValues, FieldError>;
  options: {};
}

const Form_Control: React.FC<IForm_Control> = ({ title, errors, options }) => {
  return (
    <Form.Group>
      <Form.Control
        placeholder={`${title === "con_pass" ? "confirm password" : title}...`}
        {...options}
      />
      <Form.Text
        style={{
          color: "red",
          fontSize: "0.9rem",
          fontWeight: 600,
        }}>
        {errors[title] && errors[title].message}
      </Form.Text>
    </Form.Group>
  );
};

export default Form_Control;
