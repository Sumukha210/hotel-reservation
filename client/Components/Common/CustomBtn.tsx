import Button from "react-bootstrap/Button";

type btnType = "submit" | "button";

export interface ICustomBtn {
  name: string;
  btnFun?: Function;
  BtnType?: btnType;
}

const CustomBtn: React.FC<ICustomBtn> = ({ btnFun, BtnType, name }) => {
  const handleBtn = () => {
    btnFun && btnFun();
  };

  return (
    <Button
      className={`customBtn ${BtnType === "submit" && "d-block w-100 "}`}
      onClick={handleBtn}
      type={BtnType}>
      {name}
    </Button>
  );
};

export default CustomBtn;
