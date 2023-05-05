import React from 'react'
import "./LandingPage.css"
function LandingPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
      };
    
      return (
        <div className='container1'>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="field1">Contract Address</label>
            <input type="text" id="field1" className="input-field" />
          </div>
          <div className="input-group">
            <label htmlFor="field2">Token Id</label>
            <input type="text" id="field2" className="input-field" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        </div>
      );
}

export default LandingPage