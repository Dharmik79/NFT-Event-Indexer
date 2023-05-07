import React ,{useState}from 'react'
import Profile from '../components/profile'
import Graph from '../components/Graph'
import Transactions from '../components/Transactions'
import "./MainPage.css"
import { useLocation } from "react-router";

function MainPage() {
  const { state } = useLocation();
  const [imageURL,setImageURL]= useState(state?.result?.media[0]?.gateway || "")
  const [name,setName]= useState(state?.result?.contract?.name || "")
  const [tType,setTType]= useState(state?.result?.tokenType || "")
  const [tokenId,setTokenId]= useState(state?.result?.tokenId || "")
const [traits,setTraits]=useState(state?.result?.rawMetadata?.attributes||[])
  const [owner,setOwner]=useState(state?.ownerData||"")

  return (
    <div className="boxContainer">
    <div className="row1">
      <div className="profile">
        <Profile years={state?.years} months={state?.months} days={state?.days} owner={owner}imageURL={imageURL} name={name} tType={tType} tokenId={tokenId} traits={traits}/>
      </div>
      <div className="graph">
        <Graph graphData={state?.data}/>
      </div>
    </div>
    <div className="row2">
    <div className="transactions">
      <Transactions transfers={state?.transfers}/>
      </div>
    </div>
  </div>
  )
}

export default MainPage