import Form from "react-bootstrap/Form";
import CustomBtn from "../../Common/CustomBtn";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="your name" />
        </Form.Group>

        <Form.Group>
          <Form.Control type="email" placeholder="your email" />
        </Form.Group>

        <Form.Group>
          <Form.Control as="textarea" rows={10} placeholder="your message" />
        </Form.Group>
        <CustomBtn name="submit" BtnType="submit" />
      </Form>
    </div>
  );
};

export default ContactForm;
