import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

function Main() {
  const {
    preprompt,
    setprevprompt,
    onsent,
    setrecentpromptt,
    recentprompt,
    showresult,
    loading,
    resultdata,
    input,
    setinput,
  } = useContext(Context);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onsent();
    }
}


  return (
    <div className="main">
      <div className="nav">
        <p className="prozname">ProzGpt</p>
        <img className="prajpng" src={assets.praj_cartoon} alt="" />
      </div>
      <div className="main-container">
        {!showresult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>suggest beutiful places in india</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>solve this 2+3</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>write the code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div
          className="result">
            <div className="resulttitle">
              <img src={assets.praj_cartoon} alt="" />
              <p className="recentp">{recentprompt}</p>
            </div>
            <div className="resultdata">
              {
                loading?
                <div className="loader"></div>
                 :<p className="resultpro" dangerouslySetInnerHTML={{__html:resultdata}}></p>
              }
              
             
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="input-container">
            <input
              onChange={(e) => setinput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              placeholder="Enter your prompt "
              className="prompt-input"
            />
            <div className="icon-container">
        
              
              <img
                onClick={() => onsent()}
                src={assets.send_icon}
                alt="Send"
                className="icon"
              />
            </div>
          </div>
          <div className="info-message">
            <p>ProzGPT can make mistakes. Check important info.</p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Main;
