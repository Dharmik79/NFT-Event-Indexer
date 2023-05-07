import React from "react";

function Transactions({ transfers }) {
  return (
    <div>
      {transfers.map((transfer, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
          {index+1}
            <div>{transfer.blockchainEvent.blockTimestamp}</div>
            <div><a href={`https://etherscan.io/tx/${transfer.blockchainEvent.txHash}`}>{transfer.blockchainEvent.txHash}</a></div>
            {transfer.labels.map((label, index1) => {
              return <div key={index1}>{label}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Transactions;
