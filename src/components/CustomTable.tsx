type TableHeader = {
  title: string;
  accessor: string;
};

type TableComponentProps = {
  tableData: Record<string, string | number>[];
  tableHeaders: TableHeader[];
};

function TableComponent({
  tableData = [],
  tableHeaders = [],
}: TableComponentProps) {
  return (
    <div>
      <h1>Table Component</h1>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((head, idx) => (
              <th key={idx}>{head.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, rowIdx) => (
            <tr key={rowIdx}>
              {tableHeaders.map(({ accessor }, colIdx) => (
                <td key={colIdx}>{data[accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const dummyData = [
  {
    name: "raj",
    age: 12,
  },
  {
    name: "rohit",
    age: 23,
  },
];

const tabelHeader = [
  { title: "Age", accessor: "age" },
  { title: "Name", accessor: "name" },
];

function CustomTable() {
  return <TableComponent tableData={dummyData} tableHeaders={tabelHeader} />;
}

export default CustomTable;
