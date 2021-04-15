import Table from "react-bootstrap/Table";
import TableData from "../../Common/TableDate";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <h2 className="heading-2 text-capitalize">contact info</h2>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quis.
      </p>

      <Table borderless={true} responsive>
        <tbody>
          <TableData
            title="address"
            ans="sorab(tq),shimoga(dist),karnataka,India"
          />
          <TableData title="phone" ans="8618174796" />
          <TableData title="email" ans="sumukhakb210@gmail.com" />
          <TableData title="fax" ans="+(12) 345 67890" />
        </tbody>
      </Table>
    </div>
  );
};

export default ContactInfo;
