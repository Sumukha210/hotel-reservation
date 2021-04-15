interface ITableDate {
  title: string;
  ans: string;
}

const TableData: React.FC<ITableDate> = ({ title, ans }) => {
  return (
    <tr className="">
      <td className="text-secondary text-capitalize">{title}</td>
      <td className=" ml-4 font-weight-bold">{ans}</td>
    </tr>
  );
};

export default TableData;
