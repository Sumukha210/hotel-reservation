import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import { CgChevronRight } from "react-icons/cg";

export interface ICustomHeader {
  title: string;
}

const CustomHeader: React.FC<ICustomHeader> = ({ title }) => {
  const { pathname, push } = useRouter();

  return (
    <div className="customHeader mt-3 mb-4">
      <Container className="text-center text-capitalize">
        <h1 className="header-1">{title}</h1>
        <h6 className="font-weight-bold my-3">
          <span onClick={() => push("/")}>home</span>
          <span className="mx-2">
            <CgChevronRight />
          </span>
          <span> {pathname.replace(/\//g, "")}</span>
        </h6>
      </Container>
    </div>
  );
};

export default CustomHeader;
