import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Spinner
        animation="border"
        variant="warning"
        style={{ height: 50, width: 50 }}
      />
    </div>
  );
};

export default LoadingSpinner;
