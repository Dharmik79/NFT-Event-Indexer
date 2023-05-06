import React from 'react'
import Profile from '../components/profile'
import Graph from '../components/Graph'
import Transactions from '../components/Transactions'
import "./MainPage.css"
import { useLocation } from "react-router";

function MainPage() {
  const { state } = useLocation();

  return (
    <div className="boxContainer">
    <div className="row1">
      <div className="profile">
        <Profile />
      </div>
      <div className="graph">
        <Graph />
      </div>
    </div>
    <div className="row2">
    <div className="transactions">
      <Transactions />
      </div>
    </div>
  </div>
  )
}

export default MainPage