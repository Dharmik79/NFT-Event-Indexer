import React ,{useState}from "react";

function Transactions({ transfers }){
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransfers = transfers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f2f2f2" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <th style={{ textAlign: "left", backgroundColor: "#ccc", padding: "10px", borderRight: "1px solid #ddd" }}>
              #
            </th>
            <th style={{ textAlign: "left", backgroundColor: "#ccc", padding: "10px", borderRight: "1px solid #ddd" }}>
              Timestamp
            </th>
            <th style={{ textAlign: "left", backgroundColor: "#ccc", padding: "10px", borderRight: "1px solid #ddd" }}>
              TxHash
            </th>
            <th style={{ textAlign: "left", backgroundColor: "#ccc", padding: "10px" }}>Labels</th>
          </tr>
        </thead>
        <tbody>
          {currentTransfers.map((transfer, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", backgroundColor: "white", fontWeight: "bold", borderRight: "1px solid #ddd" }}>
                {index + indexOfFirstItem + 1}
              </td>
              <td style={{ padding: "10px", backgroundColor: "white", borderRight: "1px solid #ddd" }}>
                {transfer.blockchainEvent.blockTimestamp}
              </td>
              <td style={{ padding: "10px", backgroundColor: "white", borderRight: "1px solid #ddd" }}>
                <a href={`https://etherscan.io/tx/${transfer.blockchainEvent.txHash}`}>
                  {transfer.blockchainEvent.txHash}
                </a>
              </td>
              <td style={{ padding: "10px", backgroundColor: "white" }}>{transfer.labels.map(label => label.replace('LABEL_', '')).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={transfers.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          style={{
            margin: "5px",
            padding: "10px 20px",
            border: "none",
            backgroundColor: number === currentPage ? "#4CAF50" : "white",
            color: number === currentPage ? "white" : "black",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Transactions;
