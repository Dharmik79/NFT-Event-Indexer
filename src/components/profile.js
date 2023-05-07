import React from "react";
import "./profile.css";
function Profile({
  imageURL,
  name,
  tokenId,
  tType,
  desc,
  traits,
  owner,
  days,
  months,
  years,
}) {
  return (
    <div className="container">
      <div className="card">
        <img
          src={imageURL}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <div
          style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}
        >
          Name: {name}
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            color: "#333333",
            marginBottom: "5px",
          }}
        >
          Token Type: {tType}
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            color: "#333333",
            marginBottom: "5px",
          }}
        >
          Token Id: {tokenId}
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            color: "#333333",
            marginBottom: "5px",
          }}
        >
          Owner:
          <a
            href={`https://etherscan.io/address/${owner}`}
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            {owner}
          </a>
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            color: "#333333",
          }}
        >
          {years} years {months} months {days} days
        </div>
      </div>

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          border: "1px solid #dddddd",
          borderRadius: "5px",
          padding: "10px",
          backgroundColor: "#f2f2f2",
          minWidth: "44%",
          maxWidth: "44%",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          Traits
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#dddddd",
                  fontWeight: "bold",
                  textAlign: "left",
                  padding: "10px",
                  border: "1px solid #dddddd",
                }}
              >
                Type
              </th>
              <th
                style={{
                  backgroundColor: "#dddddd",
                  fontWeight: "bold",
                  textAlign: "left",
                  padding: "10px",
                  border: "1px solid #dddddd",
                }}
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {traits.map((trait, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #dddddd", padding: "10px" }}>
                  {trait.trait_type}
                </td>
                <td style={{ border: "1px solid #dddddd", padding: "10px" }}>
                  {trait.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
